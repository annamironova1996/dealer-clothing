import { getRecommendedSubcategories } from '@/lib/get-recommended-subcategories';
import { Container } from './container';
import Link from 'next/link';

export async function RecommendedSubcategories() {
    const subcategories = await getRecommendedSubcategories();

    if (!subcategories) {
        return null;
    }

    return (
        <ul className="flex items-center flex-wrap gap-[10px]">
            {subcategories.map((subcategory) => (
                <li key={subcategory.id}>
                    <Link
                        href={`/catalog/${subcategory.parent?.slug}/${subcategory.slug}`}
                        className="text-[clamp(14px,2vw,16px)] py-[10px] px-[20px] flex items-center justify-center bg-gray-600 rounded-[100px] w-max h-[39px] transition-all duration-300 hover:bg-gray-200"
                    >
                        {subcategory.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
