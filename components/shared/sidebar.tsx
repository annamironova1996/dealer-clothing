import React, { Suspense } from 'react';
import { ProductCategories } from './product-categories';
import { SidebarBlock } from './sidebar-block';

type PropsType = {
    children: React.ReactNode;
};

export function Sidebar({ children }: PropsType) {
    return (
        <aside className="hidden md:flex flex-col gap-[clamp(20px,2vw,50px)] w-57.75">
            <SidebarBlock title="Категории">
                <Suspense fallback={<>Загрузка</>}>
                    <ProductCategories />
                </Suspense>
            </SidebarBlock>
            <SidebarBlock title="Фильтры">{children}</SidebarBlock>
        </aside>
    );
}
