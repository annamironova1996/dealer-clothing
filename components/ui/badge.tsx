import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
    'group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
                product_hot:
                    'bg-black text-white rounded-[clamp(9px,2vw,13px)] uppercase text-[clamp(9px,2vw,13px)] font-bold px-[clamp(10px,2vw,15px)] py-[clamp(6px,2vw,10px)] flex items-center justify-center h-[clamp(24px,2vw,36px)]',
                product_pre_loved:
                    'bg-black text-lime-light rounded-[clamp(9px,2vw,13px)] uppercase text-[clamp(9px,2vw,13px)]  font-bold px-[clamp(10px,2vw,15px)] py-[clamp(6px,2vw,10px)] flex items-center justify-center h-[clamp(24px,2vw,36px)]',
                product_sale:
                    'bg-terracotta text-white rounded-[clamp(9px,2vw,13px)] uppercase text-[clamp(9px,2vw,13px)]  font-bold px-[clamp(10px,2vw,15px)] py-[clamp(6px,2vw,10px)] flex items-center justify-center h-[clamp(24px,2vw,36px)]',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

function Badge({
    className,
    variant = 'default',
    render,
    ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
    return useRender({
        defaultTagName: 'span',
        props: mergeProps<'span'>(
            {
                className: cn(badgeVariants({ variant }), className),
            },
            props
        ),
        render,
        state: {
            slot: 'badge',
            variant,
        },
    });
}

export { Badge, badgeVariants };
