import { Suspense } from 'react';
import { CatalogContent } from '@/components/shared/catalog-content';
import { SkeletonCatalogContent } from '@/components/skeletons/skeleton-catalog-content';
import { SearchParamsType } from '@/lib/get-products';

export default async function CatalogPage({
    params,
    searchParams,
}: {
    params: Promise<{ category: string[] }>;
    searchParams: Promise<SearchParamsType>;
}) {
    return (
        <>
            <Suspense fallback={<SkeletonCatalogContent />}>
                <CatalogContent params={params} searchParams={searchParams} />
            </Suspense>
        </>
    );
}
