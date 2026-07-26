import { Container } from './container';
import { Sidebar } from './sidebar';
import { ProductFilters } from './product-filters';
import { ProductsGrid } from './products-grid';
import { getCatalogData, SearchParamsType } from '@/lib/get-catalog-data';

export async function CatalogContent({
    params,
    searchParams,
}: {
    params: Promise<{ category: string[] }>;
    searchParams: Promise<SearchParamsType>;
}) {
    const { category } = await params;
    const sp = await searchParams;

    const { categories, filters, products } = await getCatalogData(category, sp);

    return (
        <section className="mt-[clamp(27px,2vw,57px)]">
            <Container>
                <div className="flex items-start gap-9 lg:gap-19">
                    <Sidebar categories={categories}>
                        <ProductFilters filters={filters} />
                    </Sidebar>

                    <ProductsGrid products={products} />
                </div>
            </Container>
        </section>
    );
}
