import { useFiltersStore } from '@/store/filters';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import qs from 'qs';

export function useQueryFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isFirstRender = useRef(true);

    const { prices, colors, brands, initFromUrl } = useFiltersStore();

    useEffect(() => {
        if (isFirstRender.current) {
            initFromUrl(searchParams);
            isFirstRender.current = false;
        }
    }, [searchParams, initFromUrl]);

    const colorsKey = useMemo(() => Array.from(colors).sort().join(','), [colors]);
    const brandsKey = useMemo(() => Array.from(brands).sort().join(','), [brands]);

    useEffect(() => {
        if (isFirstRender.current) return;

        const allParams = qs.parse(searchParams.toString());

        if (prices.priceFrom !== undefined && prices.priceFrom !== null) {
            allParams.priceFrom = String(prices.priceFrom);
        } else {
            delete allParams.priceFrom;
        }

        if (prices.priceTo !== undefined && prices.priceTo !== null) {
            allParams.priceTo = String(prices.priceTo);
        } else {
            delete allParams.priceTo;
        }

        const colorsArray = Array.from(colors);
        if (colorsArray.length > 0) {
            allParams.colors = colorsArray;
        } else {
            delete allParams.colors;
        }

        const brandsArray = Array.from(brands);
        if (brandsArray.length > 0) {
            allParams.brands = brandsArray;
        } else {
            delete allParams.brands;
        }

        Object.keys(allParams).forEach((key) => {
            if (allParams[key] === undefined || allParams[key] === null || allParams[key] === '') {
                delete allParams[key];
            }
        });

        const query = qs.stringify(allParams, {
            arrayFormat: 'comma',
            skipNulls: true,
        });

        router.push(`?${query}`, { scroll: false });
    }, [prices.priceFrom, prices.priceTo, colorsKey, brandsKey]);
}
