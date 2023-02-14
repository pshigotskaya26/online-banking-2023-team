import PageTitle from '../../components/pageTitle';
import ClientLayout from '../../layouts/client';
import { TabsPanel } from './components/tabs';
import { PaymentList } from './components/paymentList';
import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import PaymentTabsNamesEnum from '../../types/enums/PaymentTabsNamesEnum';
import { Route, Routes } from 'react-router-dom';
import { PaymentForm } from './components/paymentForm';
import IService from '../../types/interfaces/IService';

const PaymentsPage = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const { services } = useAppSelector((state) => state.services);

  const [payments, setPayments] = useState<IService[]>([]);

  const filterFavoriteServices = () =>
    services.filter((service) => user?.favoriteServices.includes(service.id));
  const tabChangeHandler = (tabName: PaymentTabsNamesEnum) => {
    let srvcs = services;
    switch (tabName) {
      case PaymentTabsNamesEnum.FAVORITE:
      case PaymentTabsNamesEnum.AUTO_PAUMENTS:
        srvcs = filterFavoriteServices();
        break;
      case PaymentTabsNamesEnum.POPULAR:
        break;
    }
    setPayments(srvcs);
  };

  const { fetchServices } = useActions();
  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    setPayments(filterFavoriteServices());
  }, [services]);

  return (
    <ClientLayout>
      <PageTitle title={'Payments'} description={''} />
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              {' '}
              <TabsPanel callback={tabChangeHandler}></TabsPanel>{' '}
              <PaymentList services={payments}></PaymentList>
            </>
          }
        ></Route>
        <Route path={'/:id'} element={<PaymentForm />}></Route>
      </Routes>
    </ClientLayout>
  );
};

export default PaymentsPage;
