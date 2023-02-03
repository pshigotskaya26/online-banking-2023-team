import './index.css';
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<ClientLayoutProps> = ({children}) => {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6">
            <div>{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
