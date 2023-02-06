import ClientLayout from '../../layouts/client';
import React from 'react';
import LoginForm from '../../components/loginForm';

const AuthorizationPage = () => {
  return (
    <ClientLayout>
      <LoginForm></LoginForm>
    </ClientLayout>
  );
};

export default AuthorizationPage;
