import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import React from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ClientLayout;
