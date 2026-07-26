import { Suspense } from 'react';
import { CatalogContent } from '@/components/shared/catalog-content';
import { SkeletonCatalogContent } from '@/components/skeletons/skeleton-catalog-content';
import { SearchParamsType } from '@/lib/get-catalog-data';
import { RecommendedBlock } from '@/components/shared/recommended-block';

export default async function CatalogPage({
    params,
    searchParams,
}: {
    params: Promise<{ category: string[] }>;
    searchParams: Promise<SearchParamsType>;
}) {
    return (
        <>
            <RecommendedBlock />

            <Suspense fallback={<SkeletonCatalogContent />}>
                <CatalogContent params={params} searchParams={searchParams} />
            </Suspense>
        </>
    );
}
