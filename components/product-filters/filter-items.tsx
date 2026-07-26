'use client';

import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Brand, Color } from '@/lib/generated/prisma/client';
import { Checkbox } from '../ui/checkbox';
import { useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useFiltersStore } from '@/store/filters';
import { useQueryFilters } from '@/hooks/use-query-filters';

export type ColorItem = Pick<Color, 'id' | 'title' | 'hex'>;
export type BrandItem = Pick<Brand, 'id' | 'title'>;

type PropsType = {
    items: ColorItem[] | BrandItem[];
    searchPlaceholder: string;
    type: 'color' | 'brand';
    limit?: number;
};

const isColorItem = (item: ColorItem | BrandItem): item is ColorItem => 'hex' in item;

export function FilterItems({ items, searchPlaceholder, type, limit = 5 }: PropsType) {
    const [isShowAll, setIsShowAll] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const { colors, brands, setColors, setBrands } = useFiltersStore();
    useQueryFilters();

    const filteredItems = useMemo(() => {
        if (!searchValue.trim()) return items;

        return items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    }, [items, searchValue]);

    const visibleItems = useMemo(() => {
        if (isShowAll) return filteredItems;

        return filteredItems.slice(0, limit);
    }, [filteredItems, isShowAll]);

    const hasMoreItems = filteredItems.length > limit;
    const shouldShowSearch = items.length > limit;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value.trim()) {
            setIsShowAll(true);
        } else {
            setIsShowAll(false);
        }
    };

    const handleToggle = (id: string) => {
        if (type === 'color') {
            setColors(id);
        } else {
            setBrands(id);
        }
    };

    return (
        <>
            {shouldShowSearch && (
                <div className="relative">
                    <Input
                        type="text"
                        className="border border-gray-400 rounded-lg pl-7"
                        placeholder={searchPlaceholder}
                        value={searchValue}
                        onChange={handleSearch}
                    />
                    <Search className="w-3.5 h-4.75 absolute left-2 top-1/2 -translate-y-1/2 rotate-90 text-gray-700 " />
                </div>
            )}
            <ul className="space-y-1.25 mt-2.5">
                {visibleItems.map((item) => {
                    const itemId = String(item.id);
                    const isChecked = type === 'color' ? colors.has(itemId) : brands.has(itemId);
                    return (
                        <li className="flex items-center gap-[10px]" key={item.id}>
                            <Checkbox
                                id={type === 'color' ? `color-${item.id}` : `brand-${item.id}`}
                                checked={isChecked}
                                onCheckedChange={() => handleToggle(itemId)}
                            />
                            <label
                                htmlFor={type === 'color' ? `color-${item.id}` : `brand-${item.id}`}
                                className="flex items-center gap-[5px] text-[14px]"
                            >
                                {isColorItem(item) && (
                                    <span
                                        className={cn(
                                            'w-[15px] h-[15px] rounded-full block shrink-0',
                                            item.hex === '#FFFFFF' ? 'border border-gray-600' : ''
                                        )}
                                        style={{ backgroundColor: item.hex }}
                                    />
                                )}
                                {item.title}
                            </label>
                        </li>
                    );
                })}
                {filteredItems.length === 0 && (
                    <li>
                        <p className="text-sm text-gray-400">Нет результатов</p>
                    </li>
                )}
            </ul>
            {hasMoreItems && (
                <Button type="button" onClick={() => setIsShowAll(!isShowAll)} className="mt-2">
                    {isShowAll ? 'Скрыть' : '+ Показать все'}
                </Button>
            )}
        </>
    );
}
