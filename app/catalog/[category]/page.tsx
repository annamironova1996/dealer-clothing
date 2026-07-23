import { Container } from '@/components/shared/container';
import { ProductCard } from '@/components/shared/product-card';

export default async function CatalogPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;

    return (
        <>
            <section>Каталог {category}</section>
            <section>
                <Container>
                    <div className="flex items-start gap-9 lg:gap-19">
                        {/* Категории и фильтры */}
                        <div className="hidden md:flex w-57.75"></div>

                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5 md:gap-5 flex-1">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
