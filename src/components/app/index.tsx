import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import routes from '../../routes';
import { useActions } from '../../hooks/useActions';

const SESSION_DURATION = 10 * 60 * 1000; //10 minutes

const App: FC = () => {
  const { fetchUserInfoByID } = useActions();

  useEffect(() => {
    const session: { id: number; ts: number } = JSON.parse(
      localStorage.getItem('activeUserSession') || '{"id":0,"ts":0}',
    );
    if (session.id > 0 && session.ts + SESSION_DURATION > Date.now()) {
      fetchUserInfoByID(session.id);
    }
  }, []);

  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
