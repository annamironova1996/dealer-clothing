import { Container } from './container';
import { Sidebar } from './sidebar';
import { ProductFilters } from './product-filters';
import { ProductsGrid } from './products-grid';
import { SearchParamsType } from '@/lib/get-products';

export async function CatalogContent({
    params,
    searchParams,
}: {
    params: Promise<{ category: string[] }>;
    searchParams: Promise<SearchParamsType>;
}) {
    const { category } = await params;
    const sp = await searchParams;

    return (
        <section>
            <Container>
                <div className="flex items-start gap-9 lg:gap-19">
                    <Sidebar>
                        <ProductFilters category={category} />
                    </Sidebar>

                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5 md:gap-5 flex-1">
                        <ProductsGrid category={category} searchParams={sp} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
