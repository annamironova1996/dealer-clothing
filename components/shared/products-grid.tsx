import { getProducts, SearchParamsType } from '@/lib/get-products';
import { ProductCard } from './product-card';

type Props = {
    category: string[];
    searchParams: SearchParamsType;
};

export async function ProductsGrid({ category, searchParams }: Props) {
    const { products } = await getProducts(category, searchParams);

    return products.map((product) => <ProductCard key={product.id} product={product} />);
}
