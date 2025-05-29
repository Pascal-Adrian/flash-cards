import { RouterProvider } from 'react-router';
import router from './router/router';
import './styles.css';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeWatcher from './components/ThemeWatcher';

function App() {
  return (
    <Provider store={store}>
      <ThemeWatcher>
        <RouterProvider router={router} />
      </ThemeWatcher>
    </Provider>
  );
}

export default App;
