import App from '@/App';
import ProductPage from '@/pages/ProductPage';
import ProcessPage from '@/pages/ProcessPage';
import StagePage from '@/pages/StagePage';
import StatusPage from '@/pages/StatusPage';
import WorkshopPage from '@/pages/WorkshopPage';
import ZakazPage from '@/pages/ZakazPage';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/process',
                Component: ProcessPage,
            },
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
        ],
    },
]);
