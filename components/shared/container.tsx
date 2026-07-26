import { cn } from '@/lib/utils';

type Props = {
    children: React.ReactNode;
    className?: string;
};

export function Container({ children, className }: Props) {
    return <div className={cn('max-w-299.75 mx-auto px-2.5', className)}>{children}</div>;
}
