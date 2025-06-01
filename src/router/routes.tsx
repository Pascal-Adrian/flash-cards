import type { RouteObject } from 'react-router';
import Home from '../pages/Home';
import SetPage from '../pages/SetPage';
import Sets from '../pages/Sets';
import MySet from '../pages/MySet';

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
        element: <SetPage />,
      },
    ],
  },
  {
    path: '/my-sets/:setId',
    element: <MySet />,
  },
];

export default routes;
