import { getProducts } from '@/lib/get-products';
import { ProductFilterBlock } from './product-filters-block';
import { FilterItems, FilterPrices } from '../product-filters';

type PropsType = {
    category: string[];
};

export async function ProductFilters({ category }: PropsType) {
    const { filters } = await getProducts(category);

    return (
        <div className="flex flex-col gap-[clamp(16px,2vw,20px)]">
            {filters.priceRange.min !== filters.priceRange.max && (
                <ProductFilterBlock title="Цена">
                    <FilterPrices priceRange={filters.priceRange} />
                </ProductFilterBlock>
            )}
            {filters.colors.length > 0 && (
                <ProductFilterBlock title="Цвет">
                    <FilterItems
                        items={filters.colors}
                        searchPlaceholder="Поиск цвета"
                        type="color"
                    />
                </ProductFilterBlock>
            )}
            {filters.brands.length > 0 && (
                <ProductFilterBlock title="Бренд">
                    <FilterItems
                        items={filters.brands}
                        searchPlaceholder="Поиск бренда"
                        type="brand"
                    />
                </ProductFilterBlock>
            )}
        </div>
    );
}
