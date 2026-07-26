'use client';

import { Minus } from 'lucide-react';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';
import { useQueryFilters } from '@/hooks/use-query-filters';
import { useEffect, useState } from 'react';
import { useFiltersStore } from '@/store/filters';

type PropsType = {
    priceRange: {
        min: number;
        max: number;
    };
};

export function FilterPrices({ priceRange }: PropsType) {
    const { prices, setPrices, updatePrices } = useFiltersStore();
    useQueryFilters();

    const [sliderValue, setSliderValue] = useState([
        prices.priceFrom ?? priceRange.min,
        prices.priceTo ?? priceRange.max,
    ]);

    useEffect(() => {
        setSliderValue([prices.priceFrom ?? priceRange.min, prices.priceTo ?? priceRange.max]);
    }, [prices.priceFrom, prices.priceTo, priceRange.min, priceRange.max]);

    return (
        <>
            <Slider
                value={sliderValue}
                min={priceRange.min}
                max={priceRange.max}
                step={5}
                onValueChange={(value) => {
                    if (!Array.isArray(value)) return;
                    setSliderValue([...value]);
                }}
                onValueCommitted={(value) => {
                    if (!Array.isArray(value)) return;

                    const [priceFrom, priceTo] = value;

                    setPrices({
                        priceFrom,
                        priceTo,
                    });
                }}
            />
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 pt-5">
                <div className="relative">
                    <Input
                        className="border border-gray-400 rounded-lg"
                        value={sliderValue[0] ? String(sliderValue[0]) : String(priceRange.min)}
                        onChange={(e) => {
                            const value = Number(e.target.value);

                            setSliderValue(([min, _]) => [min, value]);

                            updatePrices('priceFrom', value);
                        }}
                    />
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[clamp(14px,2vw,16px)] text-gray-400 opacity-[0.34]">
                        ₽
                    </span>
                </div>
                <Minus className="w-2.25" />
                <div className="relative">
                    <Input
                        className="border border-gray-400 rounded-lg"
                        value={sliderValue[1] ? String(sliderValue[1]) : String(priceRange.max)}
                        onChange={(e) => {
                            const value = Number(e.target.value);

                            setSliderValue(([_, max]) => [value, max]);

                            updatePrices('priceTo', value);
                        }}
                    />
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[clamp(14px,2vw,16px)] text-gray-400 opacity-[0.34]">
                        ₽
                    </span>
                </div>
            </div>
        </>
    );
}
