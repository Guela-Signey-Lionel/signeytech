import { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const OrdinateursPage = lazy(() => import('../pages/ordinateurs/page'));
const ElectromenagerPage = lazy(() => import('../pages/electromenager/page'));
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
    element: <Navigate to="/" replace />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
