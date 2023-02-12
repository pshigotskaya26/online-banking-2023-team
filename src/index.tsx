import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter(routes);
root.render(
  <Provider store={store}>
    {/*https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx*/}
    <RouterProvider router={router} />
  </Provider>);


reportWebVitals();
