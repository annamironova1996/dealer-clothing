import { create } from 'zustand';

export type PriceProps = {
    priceFrom?: number;
    priceTo?: number;
};

type FiltersState = {
    prices: PriceProps;
    colors: Set<string>;
    brands: Set<string>;

    setPrices: (value: PriceProps) => void;
    updatePrices: (name: keyof PriceProps, value: number) => void;
    setColors: (id: string) => void;
    setBrands: (id: string) => void;

    initFromUrl: (searchParams: URLSearchParams) => void;
};

export const useFiltersStore = create<FiltersState>((set, get) => ({
    prices: {
        priceFrom: undefined,
        priceTo: undefined,
    },
    colors: new Set<string>(),
    brands: new Set<string>(),

    setPrices: (value) => set({ prices: value }),
    updatePrices: (name, value) => {
        set({
            prices: {
                ...get().prices,
                [name]: value,
            },
        });
    },
    setColors: (id: string) =>
        set((state) => {
            const newColors = new Set(state.colors);
            if (newColors.has(id)) {
                newColors.delete(id);
            } else {
                newColors.add(id);
            }
            return { colors: newColors };
        }),
    setBrands: (id: string) =>
        set((state) => {
            const newBrands = new Set(state.brands);
            if (newBrands.has(id)) {
                newBrands.delete(id);
            } else {
                newBrands.add(id);
            }
            return { brands: newBrands };
        }),

    initFromUrl: (searchParams: URLSearchParams) => {
        const colorsParam = searchParams.get('colors');
        const colorsSet = new Set<string>();
        if (colorsParam) {
            colorsParam.split(',').forEach((color) => colorsSet.add(color));
        }

        const brandsParam = searchParams.get('brands');
        const brandsSet = new Set<string>();
        if (brandsParam) {
            brandsParam.split(',').forEach((brand) => brandsSet.add(brand));
        }

        const priceFrom = Number(searchParams.get('priceFrom')) || undefined;
        const priceTo = Number(searchParams.get('priceTo')) || undefined;

        set({
            colors: colorsSet,
            brands: brandsSet,
            prices: {
                priceFrom,
                priceTo,
            },
        });
    },
}));
