import { ProductCategories } from './product-categories';
import { ProductFilters } from './product-filters';
import { SidebarBlock } from './sidebar-block';

export function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col gap-[clamp(20px,2vw,50px)] w-57.75">
            <SidebarBlock title="Категории">
                <ProductCategories />
            </SidebarBlock>
            <SidebarBlock title="Фильтры">
                <ProductFilters />
            </SidebarBlock>
        </aside>
    );
}
