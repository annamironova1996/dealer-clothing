import { Minus } from 'lucide-react';
import { ProductFilterBlock } from '../shared/product-filters-block';
import { SidebarBlock } from '../shared/sidebar-block';
import { Skeleton } from '../ui/skeleton';

export function SkeletonSidebar() {
    return (
        <aside className="hidden md:flex flex-col gap-[clamp(20px,2vw,50px)] w-57.75">
            <SidebarBlock title="Категории">
                <div className="flex flex-col gap-2.5">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className="h-6" />
                    ))}
                </div>
            </SidebarBlock>
            <SidebarBlock title="Фильтры">
                <div className="flex flex-col gap-[clamp(16px,2vw,20px)]">
                    <ProductFilterBlock title="Цена">
                        <Skeleton className="h-6.5 py-2" />
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 pt-5">
                            <Skeleton className="h-8" />
                            <Minus className="w-2.25" />
                            <Skeleton className="h-8" />
                        </div>
                    </ProductFilterBlock>
                    <ProductFilterBlock title="Цвет">
                        <Skeleton className="h-8" />
                        <div className="flex flex-col gap-2 mt-2">
                            <Skeleton className="h-6" />
                            <Skeleton className="h-6" />
                            <Skeleton className="h-6" />
                        </div>
                    </ProductFilterBlock>
                    <ProductFilterBlock title="Бренд">
                        <Skeleton className="h-8" />
                        <div className="flex flex-col gap-2 mt-2">
                            <Skeleton className="h-6" />
                            <Skeleton className="h-6" />
                            <Skeleton className="h-6" />
                        </div>
                    </ProductFilterBlock>
                </div>
            </SidebarBlock>
        </aside>
    );
}
