'use client';

import { useEffect, useState } from 'react';
import { categories } from '@/constants';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function ProductCategories() {
    const params = useParams();
    const categorySegments = (params.category as string[]) || [];
    const categorySlug = categorySegments[0];

    const getInitialOpenCategories = () => {
        if (categorySlug) {
            const matchedCategory = categories.find(
                (cat) => cat.slug === categorySlug && cat.parentId === null
            );
            if (matchedCategory) {
                return [matchedCategory.id];
            }
        }
        return [];
    };

    const [openCategories, setOpenCategories] = useState<number[]>(getInitialOpenCategories);

    const hasChildrenInCategory = (categoryId: number) => {
        return categories.some((child) => child.parentId === categoryId);
    };

    const getChildren = (categoryId: number) => {
        return categories.filter((child) => child.parentId === categoryId);
    };

    const toggleCategory = (categoryId: number) => {
        setOpenCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const isCategoryOpen = (categoryId: number) => {
        return openCategories.includes(categoryId);
    };

    useEffect(() => {
        if (categorySlug) {
            const matchedCategory = categories.find(
                (cat) => cat.slug === categorySlug && cat.parentId === null
            );
            if (matchedCategory) {
                setOpenCategories((prev) => {
                    if (!prev.includes(matchedCategory.id)) {
                        return [...prev, matchedCategory.id];
                    }
                    return prev;
                });
            }
        }
    }, [categorySlug]);

    return (
        <div className="flex flex-col gap-[10px]">
            {categories.map(
                (category) =>
                    category.parentId === null && (
                        <div key={category.id}>
                            <div className="flex items-center gap-[clamp(6px,2vw,10px)]">
                                <Link
                                    href={`/catalog/${category.slug}`}
                                    className={`transition-opacity ${
                                        categorySlug === category.slug
                                            ? 'opacity-60'
                                            : 'hover:opacity-60'
                                    }`}
                                >
                                    {category.name}
                                </Link>

                                {hasChildrenInCategory(category.id) && (
                                    <button
                                        type="button"
                                        onClick={() => toggleCategory(category.id)}
                                        className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
                                        aria-expanded={isCategoryOpen(category.id)}
                                    >
                                        <ChevronDown
                                            strokeWidth={1.5}
                                            className={`w-4 h-4 text-black transition-all duration-300 ${
                                                isCategoryOpen(category.id) ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                )}
                            </div>

                            {hasChildrenInCategory(category.id) && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isCategoryOpen(category.id)
                                            ? 'max-h-[1000px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <ul className="py-[15px] space-y-[10px]">
                                        {getChildren(category.id).map((child) => (
                                            <li key={child.id}>
                                                <Link
                                                    href={`/catalog/${category.slug}/${child.slug}`}
                                                    className={`transition-opacity ${
                                                        categorySegments[1] === child.slug
                                                            ? 'opacity-60'
                                                            : 'hover:opacity-60'
                                                    }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
            )}
        </div>
    );
}
