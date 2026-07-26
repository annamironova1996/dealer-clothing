type Props = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    variant?: 'large' | 'medium' | 'small' | 'xs';
    children: React.ReactNode;
    className?: string;
};

const styles = {
    large: {
        tag: 'h1',
        className: 'text-4xl md:text-5xl font-bold tracking-tight',
    },
    medium: {
        tag: 'h2',
        className: 'text-3xl md:text-4xl font-semibold',
    },
    small: {
        tag: 'h3',
        className: 'text-[clamp(20px,2vw,24px)] font-semibold',
    },
    xs: {
        tag: 'h4',
        className: 'text-xl md:text-2xl font-medium text-gray-600',
    },
} as const;

export function Title({ tag, variant = 'medium', children, className = '' }: Props) {
    const style = styles[variant];
    const Tag = tag || style.tag;

    return <Tag className={`${style.className} ${className}`}>{children}</Tag>;
}
