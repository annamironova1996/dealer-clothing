import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Product } from '@/lib/generated/prisma/client';

type Props = {
    product: Product;
};

export function ProductCard({ product }: Props) {
    const isFavorite = false;

    return (
        <div className="relative py-[clamp(8px,2vw,12px)] px-[clamp(12px,2vw,15px)] border border-gray-200 rounded-[clamp(9px,2vw,13px)] flex flex-col justify-end min-h-51.25 md:min-h-63.75 lg:min-h-74.5">
            <div className="absolute w-full top-0 left-0 right-0 flex justify-between items-center z-1 py-[clamp(8px,2vw,12px)] px-[clamp(12px,2vw,15px)]">
                {product.isHot && <Badge variant="product_hot">hot</Badge>}
                {product.isNew && <Badge variant="product_hot">new</Badge>}
                {product.isOnSale && <Badge variant="product_sale">-{product.salePercent}%</Badge>}
                {product.isPreLoved && <Badge variant="product_pre_loved">pre-loved</Badge>}

                <button
                    type="button"
                    aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
                    className="cursor-pointer"
                >
                    <Heart className="w-[clamp(16px,2vw,20px)] h-[clamp(16px,2vw,20px)] text-gray-300 hover:text-terracotta transition-all duration-300" />
                </button>
            </div>
            <img
                src={product.imageUrl}
                alt={product.title}
                className="max-h-[clamp(130px,2vw,191px)] mx-auto object-cover"
            />
            <Link href="product/slug" className="block mb-[clamp(10px,2vw,15px)]">
                <h3 className="text-[clamp(12px,2vw,15px)] max-w-40 text-center mx-auto font-normal tracking-widest sm:tracking-normal">
                    {product.title}
                </h3>
            </Link>
            <p className="text-center tracking-widest sm:tracking-normal font-ruberoid-medium text-[clamp(10px,2vw,15px)]">
                {product.salePrice ? product.salePrice : product.price} руб
            </p>
        </div>
    );
}
