import { createBrowserRouter } from 'react-router';
import routes from './routes';

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_NAME,
});

export default router;
