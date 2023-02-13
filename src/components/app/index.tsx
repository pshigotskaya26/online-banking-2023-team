import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import routes from '../../routes';
import { useActions } from '../../hooks/useActions';
import { fetchUserInfoByID } from '../../store/actions/authorization';

const App: FC = () => {
  const { fetchUserInfoByID } = useActions();

  useEffect(() => {
    if (localStorage.getItem('activeUserID')) {
      const id = localStorage.getItem('activeUserID') || '';

      fetchUserInfoByID(+id);
    }
  }, []);

  const router = createBrowserRouter(routes);
  return <>
    <RouterProvider router={router} />
  </>;
};

export default App;