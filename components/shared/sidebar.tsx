import React from 'react';
import { ProductCategories } from './product-categories';
import { SidebarBlock } from './sidebar-block';
import { Category } from '@/lib/generated/prisma/client';

export type CategoryWithChildren = Category & {
    children: Category[];
};

type PropsType = {
    categories: CategoryWithChildren[];
    children: React.ReactNode;
};

export async function Sidebar({ categories, children }: PropsType) {
    return (
        <aside className="hidden md:flex flex-col gap-[clamp(20px,2vw,50px)] w-57.75">
            <SidebarBlock title="Категории">
                <ProductCategories categories={categories} />
            </SidebarBlock>
            <SidebarBlock title="Фильтры">{children}</SidebarBlock>
        </aside>
    );
}
