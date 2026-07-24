type Props = {
    title: string;
    children: React.ReactNode;
};

export function ProductFilterBlock({ title, children }: Props) {
    return (
        <div>
            <p className="color-black text-[clamp(14px,2vw,16px)] mb-[clamp(10px,2vw,15px)]">{title}</p>
            {children}
        </div>
    );
}
