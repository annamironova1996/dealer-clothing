import { notFound } from 'next/navigation';
import { prisma } from './prisma';
import { delay } from './delay';

export type SearchParamsType = {
    colors?: string;
    brands?: string;
    priceFrom?: string;
    priceTo?: string;
};

export async function getProducts(category: string[], searchParams?: SearchParamsType) {
    await delay(500);

    if (!category || category.length === 0) {
        notFound();
    }

    const mainCategory = await prisma.category.findFirst({
        where: {
            slug: category[0],
        },
        include: {
            children: true,
        },
    });

    if (!mainCategory) {
        notFound();
    }

    let categoryIds: number[] = [];
    let isSubcategory = false;

    if (category[1]) {
        const subCategory = await prisma.category.findFirst({
            where: {
                slug: category[1],
                parentId: mainCategory.id,
            },
        });
        if (!subCategory) {
            notFound();
        }
        categoryIds = [subCategory.id];
        isSubcategory = true;
    } else {
        categoryIds = [mainCategory.id, ...mainCategory.children.map((child) => child.id)];
    }

    const priceRange = await prisma.product.aggregate({
        where: {
            categoryId: {
                in: categoryIds,
            },
        },
        _min: {
            price: true,
        },
        _max: {
            price: true,
        },
    });

    const minPrice = Number(searchParams?.priceFrom) || priceRange._min.price || 0;
    const maxPrice = Number(searchParams?.priceTo) || priceRange._max.price || 0;

    const colorIds = searchParams?.colors?.split(',').map(Number).filter(Boolean) || [];
    const brandIds = searchParams?.brands?.split(',').map(Number).filter(Boolean) || [];

    const products = await prisma.product.findMany({
        where: {
            categoryId: {
                in: categoryIds,
            },
            price: {
                gte: minPrice,
                lte: maxPrice,
            },
            ...(colorIds.length > 0 && {
                colors: {
                    some: {
                        colorId: {
                            in: colorIds,
                        },
                    },
                },
            }),

            ...(brandIds.length > 0 && {
                brandId: {
                    in: brandIds,
                },
            }),
        },
        include: {
            colors: {
                include: {
                    color: true,
                },
            },
            brand: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    const colorsMap = new Map<number, { id: number; title: string; hex: string }>();
    products.forEach((product) => {
        product.colors.forEach((pc) => {
            if (!colorsMap.has(pc.colorId)) {
                colorsMap.set(pc.colorId, {
                    id: pc.color.id,
                    title: pc.color.title,
                    hex: pc.color.hex,
                });
            }
        });
    });
    const colors = Array.from(colorsMap.values());

    const brandsMap = new Map<number, { id: number; title: string }>();
    products.forEach((product) => {
        if (product.brand && !brandsMap.has(product.brand.id)) {
            brandsMap.set(product.brand.id, {
                id: product.brand.id,
                title: product.brand.title,
            });
        }
    });
    const brands = Array.from(brandsMap.values());

    return {
        products,
        filters: {
            colors,
            brands,
            priceRange: {
                min: minPrice,
                max: maxPrice,
            },
        },
        isSubcategory,
        mainCategory,
    };
}
