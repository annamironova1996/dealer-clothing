import { Minus, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';
import { ProductFilterBlock } from './product-filters-block';
import { Checkbox } from '../ui/checkbox';
import { brands, colors } from '@/constants';

export function ProductFilters() {
    return (
        <div className="flex flex-col gap-[clamp(16px,2vw,20px)]">
            {/* цена  */}
            <ProductFilterBlock title="Цена">
                <Slider
                    defaultValue={[25, 50]}
                    max={100}
                    step={5}
                    className="mx-auto w-full py-2.5"
                />
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 pt-5">
                    <div className="relative">
                        <Input className="border border-gray-400 rounded-lg" />
                        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[clamp(14px,2vw,16px)] text-gray-400 opacity-[0.34]">
                            ₽
                        </span>
                    </div>
                    <Minus className="w-2.25" />
                    <div className="relative">
                        <Input className="border border-gray-400 rounded-lg" />
                        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[clamp(14px,2vw,16px)] text-gray-400 opacity-[0.34]">
                            ₽
                        </span>
                    </div>
                </div>
            </ProductFilterBlock>
            <ProductFilterBlock title="Цвет">
                <div className="relative">
                    <Input
                        className="border border-gray-400 rounded-lg pl-7"
                        placeholder="Поиск цвета"
                    />
                    <Search className="w-3.5 h-4.75 absolute left-2 top-1/2 -translate-y-1/2 rotate-90 text-gray-700 " />
                </div>
                <ul className="space-y-1.25 mt-2.5">
                    {colors.map(({ id, name, color }) => (
                        <li className="flex items-center gap-[10px]" key={id}>
                            <Checkbox id={`color-${id}`} />
                            <label
                                htmlFor={`color-${id}`}
                                className="flex items-center gap-[5px] text-[14px]"
                            >
                                <span
                                    className="w-[15px] h-[15px] rounded-full block shrink-0"
                                    style={{ backgroundColor: color }}
                                />
                                {name}
                            </label>
                        </li>
                    ))}
                </ul>
            </ProductFilterBlock>
            <ProductFilterBlock title="Бренд">
                <div className="relative">
                    <Input
                        className="border border-gray-400 rounded-lg pl-7"
                        placeholder="Поиск бренда"
                    />
                    <Search className="w-3.5 h-4.75 absolute left-2 top-1/2 -translate-y-1/2 rotate-90 text-gray-700 " />
                </div>
                <ul className="space-y-1.25 mt-2.5">
                    {brands.map(({ id, name }) => (
                        <li className="flex items-center gap-[10px]" key={id}>
                            <Checkbox id={`brand-${id}`} />
                            <label
                                htmlFor={`brand-${id}`}
                                className="flex items-center gap-[5px] text-[14px]"
                            >
                                {name}
                            </label>
                        </li>
                    ))}
                </ul>
            </ProductFilterBlock>
        </div>
    );
}
