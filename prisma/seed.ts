import { PrismaClient } from '@/lib/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
    adapter,
});

const categories = [
    { id: 1, title: 'Одежда', slug: 'odezhda', parentId: null },
    { id: 2, title: 'Верхняя одежда', slug: 'verhnyaya-odezhda', parentId: null },
    { id: 3, title: 'Обувь', slug: 'obuv', parentId: null },
    { id: 4, title: 'Аксессуары', slug: 'aksessuary', parentId: null },
    { id: 5, title: 'Сумки', slug: 'sumki', parentId: null },
    { id: 6, title: 'Товары для спорта', slug: 'tovary-dlya-sporta', parentId: null },

    { id: 101, title: 'Свитера, трикотаж', slug: 'svitera-trikotazh', parentId: 1 },
    { id: 102, title: 'Худи, свитшоты', slug: 'hudi-svitshoty', parentId: 1 },
    { id: 103, title: 'Футболки, поло', slug: 'futbolki-polo', parentId: 1 },
    { id: 104, title: 'Кофты на молнии', slug: 'kofty-na-molnii', parentId: 1 },
    { id: 105, title: 'Лонгсливы', slug: 'longslivy', parentId: 1 },
    { id: 106, title: 'В наличии', slug: 'v-nalichii', parentId: 1 },

    { id: 201, title: 'Пальто', slug: 'palto', parentId: 2 },
    { id: 202, title: 'Куртки', slug: 'kurtki', parentId: 2 },
    { id: 203, title: 'Пуховики', slug: 'puhoviki', parentId: 2 },

    { id: 301, title: 'Кроссовки', slug: 'krossovki', parentId: 3 },
    { id: 302, title: 'Ботинки', slug: 'botinki', parentId: 3 },
    { id: 303, title: 'Туфли', slug: 'tufli', parentId: 3 },

    { id: 401, title: 'Ремни', slug: 'remni', parentId: 4 },
    { id: 402, title: 'Шарфы', slug: 'sharfy', parentId: 4 },
    { id: 403, title: 'Головные уборы', slug: 'golovnye-ubory', parentId: 4 },

    { id: 501, title: 'Рюкзаки', slug: 'ryukzaki', parentId: 5 },
    { id: 502, title: 'Женские сумки', slug: 'zhenskie-sumki', parentId: 5 },
    { id: 503, title: 'Дорожные сумки', slug: 'dorozhnye-sumki', parentId: 5 },

    { id: 601, title: 'Фитнес-аксессуары', slug: 'fitnes-aksessuary', parentId: 6 },
    { id: 602, title: 'Спортивные товары', slug: 'sportivnye-tovary', parentId: 6 },
];

const colors = [
    { id: 1, title: 'Черный', hex: '#000000' },
    { id: 2, title: 'Белый', hex: '#FFFFFF' },
    { id: 3, title: 'Красный', hex: '#FF0000' },
    { id: 4, title: 'Синий', hex: '#0000FF' },
    { id: 5, title: 'Зеленый', hex: '#008000' },
    { id: 6, title: 'Желтый', hex: '#FFFF00' },
    { id: 7, title: 'Оранжевый', hex: '#FFA500' },
    { id: 8, title: 'Фиолетовый', hex: '#800080' },
    { id: 9, title: 'Розовый', hex: '#FFC0CB' },
    { id: 10, title: 'Серый', hex: '#808080' },
    { id: 11, title: 'Коричневый', hex: '#8B4513' },
    { id: 12, title: 'Бежевый', hex: '#F5F5DC' },
];

const brands = [
    { id: 1, title: 'Nike' },
    { id: 2, title: 'Adidas' },
    { id: 3, title: 'Puma' },
    { id: 4, title: 'Zara' },
    { id: 5, title: 'H&M' },
    { id: 6, title: 'Uniqlo' },
    { id: 7, title: "Levi's" },
    { id: 8, title: 'Calvin Klein' },
    { id: 9, title: 'Tommy Hilfiger' },
    { id: 10, title: 'Gucci' },
];

const products = [
    {
        id: 1,
        title: 'Шерстяной свитер оверсайз',
        slug: 'sherstyanoi-sviter-oversize',
        price: 4999,
        description: 'Тёплый свитер из натуральной шерсти оверсайз',
        categoryId: 101,
        brandId: 4,
        colorIds: [1, 11, 6],
        imageUrl: '/products/sweater-oversize.jpg',
    },
    {
        id: 2,
        title: 'Трикотажный кардиган',
        slug: 'trikotazhnyi-kardigan',
        price: 3599,
        description: 'Уютный кардиган из мягкого трикотажа',
        categoryId: 101,
        brandId: 5,
        colorIds: [12, 6, 3],
        imageUrl: '/products/cardigan.jpg',
    },
    {
        id: 3,
        title: 'Худи с капюшоном',
        slug: 'hudi-s-kapyushonom',
        price: 2999,
        description: 'Тёплое худи с капюшоном и карманом-кенгуру',
        categoryId: 102,
        brandId: 1,
        colorIds: [1, 4, 8],
        imageUrl: '/products/hoodie.jpg',
    },
    {
        id: 4,
        title: 'Свитшот с принтом',
        slug: 'svitshot-s-printom',
        price: 2499,
        description: 'Свитшот с модным принтом и мягкой подкладкой',
        categoryId: 102,
        brandId: 2,
        colorIds: [2, 10, 3],
        imageUrl: '/products/sweatshirt.jpg',
    },
    {
        id: 5,
        title: 'Хлопковая футболка',
        slug: 'khlopkovaya-futbolka',
        price: 1499,
        description: 'Качественная футболка из 100% хлопка',
        categoryId: 103,
        brandId: 3,
        colorIds: [2, 1, 4],
        imageUrl: '/products/t-shirt.jpg',
    },
    {
        id: 6,
        title: 'Поло с воротником',
        slug: 'polo-s-vorotnikom',
        price: 1999,
        description: 'Классическое поло с воротником и тремя пуговицами',
        categoryId: 103,
        brandId: 6,
        colorIds: [4, 3, 12],
        imageUrl: '/products/polo.jpg',
    },
    {
        id: 7,
        title: 'Шерстяное пальто',
        slug: 'sherstyanoe-palto',
        price: 9999,
        description: 'Элегантное пальто из кашемира с поясом',
        categoryId: 201,
        brandId: 8,
        colorIds: [1, 11, 10],
        imageUrl: '/products/coat.jpg',
    },
    {
        id: 8,
        title: 'Кожаная куртка',
        slug: 'kozhanaya-kurtka',
        price: 7999,
        description: 'Стильная куртка из натуральной кожи',
        categoryId: 202,
        brandId: 9,
        colorIds: [1, 11, 6],
        imageUrl: '/products/leather-jacket.jpg',
    },
    {
        id: 9,
        title: 'Пуховик зимний',
        slug: 'puhovik-zimnii',
        price: 6999,
        description: 'Тёплый пуховик для зимних прогулок',
        categoryId: 203,
        brandId: 7,
        colorIds: [1, 4, 3],
        imageUrl: '/products/down-jacket.jpg',
    },
    {
        id: 10,
        title: 'Кроссовки спортивные',
        slug: 'krossovki-sportivnye',
        price: 5499,
        description: 'Легкие и удобные кроссовки для бега',
        categoryId: 301,
        brandId: 1,
        colorIds: [1, 2, 3],
        imageUrl: '/products/sneakers.jpg',
    },
    {
        id: 11,
        title: 'Кожаные ботинки',
        slug: 'kozhanie-botinki',
        price: 6599,
        description: 'Классические ботинки из натуральной кожи',
        categoryId: 302,
        brandId: 10,
        colorIds: [11, 1],
        imageUrl: '/products/boots.jpg',
    },
    {
        id: 12,
        title: 'Кожаный ремень',
        slug: 'kozhanii-remen',
        price: 1299,
        description: 'Качественный ремень из натуральной кожи',
        categoryId: 401,
        brandId: 8,
        colorIds: [1, 11],
        imageUrl: '/products/belt.jpg',
    },
    {
        id: 13,
        title: 'Городской рюкзак',
        slug: 'gorodskoi-ryukzak',
        price: 3499,
        description: 'Стильный рюкзак для повседневной носки',
        categoryId: 501,
        brandId: 2,
        colorIds: [1, 4, 10],
        imageUrl: '/products/backpack.jpg',
    },
];

async function main() {
    await prisma.$transaction([
        prisma.productColor.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
        prisma.color.deleteMany(),
        prisma.brand.deleteMany(),
    ]);

    for (const category of categories) {
        await prisma.category.create({ data: category });
    }

    for (const color of colors) {
        await prisma.color.create({ data: color });
    }

    for (const brand of brands) {
        await prisma.brand.create({ data: brand });
    }

    let productCount = 0;
    for (const productData of products) {
        const { colorIds, ...productInfo } = productData;

        await prisma.product.create({
            data: {
                ...productInfo,
                colors: {
                    create: colorIds.map((colorId) => ({
                        color: {
                            connect: { id: colorId },
                        },
                    })),
                },
            },
        });

        productCount++;
    }
}

main()
    .catch((e) => {
        console.error('❌ Ошибка:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
