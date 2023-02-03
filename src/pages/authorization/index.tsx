import ClientLayout from '../../layouts/client';
import React, { useState } from 'react';
import LoginForm from '../../components/loginForm';

const AuthorizationPage = () => {
  return (
    <ClientLayout>
      <LoginForm></LoginForm>
    </ClientLayout>
  );
};

export default AuthorizationPage;
