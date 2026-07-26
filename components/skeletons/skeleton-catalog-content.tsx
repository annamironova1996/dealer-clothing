import { SkeletonSidebar } from './skeleton-sidebar';
import { SkeletonProductCards } from './skeleton-product-cards';
import { Container } from '../shared/container';

export function SkeletonCatalogContent() {
    return (
        <section>
            <Container>
                <div className="flex items-start gap-9 lg:gap-19">
                    <SkeletonSidebar />
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5 md:gap-5 flex-1">
                        <SkeletonProductCards />
                    </div>
                </div>
            </Container>
        </section>
    );
}
