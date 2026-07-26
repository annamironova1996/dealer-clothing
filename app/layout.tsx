import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const ruberoid = localFont({
    src: [
        {
            path: '../public/fonts/Ruberoid-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Ruberoid-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/Ruberoid-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/Ruberoid-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Ruberoid-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/Ruberoid-ExtraBoldOblique.woff2',
            weight: '800',
            style: 'oblique',
        },
    ],
    display: 'swap',
    variable: '--font-ruberoid',
});

export const metadata: Metadata = {
    title: 'Магазин одежды DEALER',
    description:
        'DEALER — интернет-магазин стильной одежды и аксессуаров. Новые коллекции, быстрая доставка, доступные цены.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className="h-full antialiased" suppressHydrationWarning>
            <body
                className={`${inter.className} ${ruberoid.variable} min-h-full flex flex-col`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
