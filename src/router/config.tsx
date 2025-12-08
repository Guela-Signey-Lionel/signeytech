import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const OrdinateursPage = lazy(() => import('../pages/ordinateurs/page'));
const ElectromenagerPage = lazy(() => import('../pages/electromenager/page'));
const ProduitsPage = lazy(() => import('../pages/produits/page'));
const PanierPage = lazy(() => import('../pages/panier/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/a-propos',
    element: <AboutPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/ordinateurs',
    element: <OrdinateursPage />,
  },
  {
    path: '/electromenager',
    element: <ElectromenagerPage />,
  },
  {
    path: '/produits',
    element: <ProduitsPage />,
  },
  {
    path: '/panier',
    element: <PanierPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
