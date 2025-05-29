import { RouterProvider } from 'react-router';
import router from './router/router';
import './styles.css';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
