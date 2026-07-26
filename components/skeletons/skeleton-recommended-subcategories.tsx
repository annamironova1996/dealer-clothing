import { Skeleton } from '../ui/skeleton';

export function SkeletonRecommendedSubcategories() {
    return (
        <ul className="flex items-center flex-wrap gap-[10px]">
            {Array.from({ length: 8 }).map((_, index) => (
                <li key={index}>
                    <Skeleton className="rounded-[100px] w-[clamp(140px,2vw,175px)] h-[39px]" />
                </li>
            ))}
        </ul>
    );
}
