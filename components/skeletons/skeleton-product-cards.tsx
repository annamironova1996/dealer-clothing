import { Skeleton } from '../ui/skeleton';

export function SkeletonProductCards() {
    return Array.from({ length: 9 }).map((_, index) => (
        <Skeleton key={index} className="min-h-51.25 md:min-h-63.75 lg:min-h-74.5 w-full" />
    ));
}
