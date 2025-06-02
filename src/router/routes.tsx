import type { RouteObject } from 'react-router';
import Home from '../pages/Home';
import SetPage from '../pages/SetPage';
import Sets from '../pages/Sets';
import MySet from '../pages/MySet';
import EditSet from '../pages/EditSet';
import CreateSet from '../pages/CreateSet';
import Study from '../pages/Study';

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
    path: '/my-sets',
    children: [
      {
        path: ':setId',
        element: <MySet />,
      },
      {
        path: ':setId/edit',
        element: <EditSet />,
      },
      {
        path: ':setId/study',
        element: <Study />,
      },
      {
        path: 'create',
        element: <CreateSet />,
      },
    ],
  },
];

export default routes;
