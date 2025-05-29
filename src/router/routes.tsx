import type { RouteObject } from 'react-router';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import MyCards from '../pages/MyCards';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/my-cards',
    element: <MyCards />,
  },
];

export default routes;
