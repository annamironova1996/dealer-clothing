import { cache } from 'react';
import { prisma } from './prisma';
import { delay } from './delay';

const getSubcategories = cache(async function getSubcategories() {
    await delay(500);

    return await prisma.category.findMany({
        where: {
            parentId: {
                not: null,
            },
            NOT: {
                title: {
                    in: ['В наличии', 'Под заказ'],
                },
            },
        },
        include: {
            parent: {
                select: {
                    slug: true,
                },
            },
        },
    });
});

export async function getRecommendedSubcategories(limit: number = 8) {
    const subcategories = await getSubcategories();

    if (subcategories.length === 0) {
        return [];
    }

    const shuffled = shuffleArray(subcategories);
    return shuffled.slice(0, limit);
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
