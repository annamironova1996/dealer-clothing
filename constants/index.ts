export const colors = [
    {
        id: 1,
        name: 'Белый',
        color: '#ffffff',
    },
    {
        id: 2,
        name: 'Красный',
        color: '#950610',
    },
    {
        id: 3,
        name: 'Чёрный',
        color: '#000000',
    },
];

export const brands = [
    {
        id: 1,
        name: 'Nike',
    },
    {
        id: 2,
        name: 'Adidas',
    },
    {
        id: 3,
        name: 'Puma',
    },
];

export const categories = [
    // Корневые категории
    { id: 1, name: 'Одежда', slug: 'odezhda', parentId: null },
    { id: 2, name: 'Верхняя одежда', slug: 'verhnyaya-odezhda', parentId: null },
    { id: 3, name: 'Обувь', slug: 'obuv', parentId: null },
    { id: 4, name: 'Аксессуары', slug: 'aksessuary', parentId: null },
    { id: 5, name: 'Сумки', slug: 'sumki', parentId: null },
    { id: 6, name: 'Товары для спорта', slug: 'tovary-dlya-sporta', parentId: null },

    // Дочерние категории для "Одежда" (parentId: 1)
    { id: 101, name: 'Свитера, трикотаж', slug: 'svitera-trikotazh', parentId: 1 },
    { id: 102, name: 'Худи, свитшоты', slug: 'hudi-svitshoty', parentId: 1 },
    { id: 103, name: 'Футболки, поло', slug: 'futbolki-polo', parentId: 1 },
    { id: 104, name: 'Кофты на молнии', slug: 'kofty-na-molnii', parentId: 1 },
    { id: 105, name: 'Лонгсливы', slug: 'longslivy', parentId: 1 },
    { id: 106, name: 'В наличии', slug: 'v-nalichii', parentId: 1 },

    // Дочерние категории для "Верхняя одежда" (parentId: 2)
    { id: 201, name: 'Пальто', slug: 'palto', parentId: 2 },
    { id: 202, name: 'Куртки', slug: 'kurtki', parentId: 2 },
    { id: 203, name: 'Пуховики', slug: 'puhoviki', parentId: 2 },
];
