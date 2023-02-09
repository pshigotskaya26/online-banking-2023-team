import ClientLayout from '../../layouts/client';
import React from 'react';
import LoginForm from '../../components/loginForm';
import LogoutForm from '../../components/logoutForm';

interface AuthorizationPageProps {
  isLogin: boolean;
}

const AuthorizationPage: React.FC<AuthorizationPageProps> = ({ isLogin }) => {
  return (
    <ClientLayout>
      {isLogin ? <LoginForm></LoginForm> : <LogoutForm></LogoutForm>}
    </ClientLayout>
  );
};

export default AuthorizationPage;
