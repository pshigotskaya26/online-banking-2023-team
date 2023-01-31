import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import React from 'react';

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className={'container mx-auto'}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
