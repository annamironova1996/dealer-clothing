import { Suspense } from 'react';
import { Container } from './container';
import { RecommendedSubcategories } from './recommended-subcategories';
import { SkeletonRecommendedSubcategories } from '../skeletons/skeleton-recommended-subcategories';

export function RecommendedBlock() {
    return (
        <section className="hidden md:block">
            <Container>
                <h2 className="font-normal text-[13px] underline decoration-gray-800 [text-decoration-skip-ink:none] text-gray-800 mb-[20px]">
                    Рекомендации
                </h2>
                <Suspense fallback={<SkeletonRecommendedSubcategories />}>
                    <RecommendedSubcategories />
                </Suspense>
            </Container>
        </section>
    );
}
