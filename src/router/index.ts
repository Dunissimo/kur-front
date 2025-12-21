import App from '@/App';
import ProductPage from '@/pages/ProductPage';
import StagePage from '@/pages/StagePage';
import StatusPage from '@/pages/StatusPage';
import WorkshopPage from '@/pages/WorkshopPage';
import ZakazPage from '@/pages/ZakazPage';
import { createBrowserRouter } from 'react-router';
import ProductStage from '@/pages/ProductStage';
import ProductStagePage from '@/pages/ProductStagePage';
import UserPage from '@/pages/UserPage';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/stage',
                Component: StagePage,
            },
            {
                path: '/workshop',
                Component: WorkshopPage,
            },
            {
                path: '/status',
                Component: StatusPage,
            },
            {
                path: '/zakaz',
                Component: ZakazPage,
            },
            {
                path: '/product',
                Component: ProductPage,
            },
            {
                path: '/product-stage',
                Component: ProductStagePage,
            },
            {
                path: '/product/:id/stages',
                Component: ProductStage,
            },
            {
                path: '/user',
                Component: UserPage,
            },
        ],
    },
]);
