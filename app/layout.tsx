import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
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
                className={`${inter.className} min-h-full flex flex-col`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
