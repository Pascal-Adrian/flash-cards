import type { RouteObject } from 'react-router';
import Home from '../pages/Home';
import Set from '../pages/Set';
import Sets from '../pages/Sets';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sets',
    children: [
      {
        index: true,
        element: <Sets />,
      },
      {
        path: ':setId',
        element: <Set />,
      },
    ],
  },
];

export default routes;
