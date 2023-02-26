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
import { ITransaction } from '../../types/interfaces/ITransaction';

const PaymentsPage = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const { services } = useAppSelector((state) => state.services);
  const { transactions: userTransactions } = useAppSelector(
    (state) => state.transactions,
  );
  const { getTransactionsByUserId, fetchServices } = useActions();

  const [payments, setPayments] = useState<IService[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (user !== null) {
      getTransactionsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    setTransactions(userTransactions);
  }, [userTransactions]);

  const filterFavoriteServices = () =>
    services.filter((service) => user?.favoriteServices?.includes(service.id));

  const filterPopularServices = () =>
    services.filter((service) =>
      transactions.some((trans) => trans.entityid === service.id),
    );
  const tabChangeHandler = (tabName: PaymentTabsNamesEnum) => {
    let srvcs = services;
    switch (tabName) {
      case PaymentTabsNamesEnum.FAVORITE:
        srvcs = filterFavoriteServices();
        break;
      case PaymentTabsNamesEnum.POPULAR:
        srvcs = filterPopularServices();
        break;
      case PaymentTabsNamesEnum.AUTO_PAUMENTS:
        srvcs = [];
        break;
    }
    setPayments(srvcs);
  };

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
        <Route path={'/:code'} element={<PaymentForm />}></Route>
      </Routes>
    </ClientLayout>
  );
};

export default PaymentsPage;
