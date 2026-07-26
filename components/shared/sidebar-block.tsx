import { Title } from './title';

type Props = {
    title: string;
    children: React.ReactNode;
};

export function SidebarBlock({ title, children }: Props) {
    return (
        <div>
            <Title className="mb-[clamp(16px,2vw,20px)]">{title}</Title>
            {children}
        </div>
    );
}
