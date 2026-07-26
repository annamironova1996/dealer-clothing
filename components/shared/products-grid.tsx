import { getCatalogData, SearchParamsType } from '@/lib/get-catalog-data';
import { ProductCard } from './product-card';
import { Product } from '@/lib/generated/prisma/client';

type Props = {
    products: Product[];
};

export async function ProductsGrid({ products }: Props) {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5 md:gap-5 flex-1">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
