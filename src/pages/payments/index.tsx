import PageTitle from '../../components/pageTitle';
import ClientLayout from '../../layouts/client';
import { Tabs } from './components/Tabs/Tabs';
import { PaymentList } from './components/paymentList';
import { useEffect, useState } from 'react';

const PaymentsPage = () => {
  const [tab, setTab] = useState('');
  const [payments, setPayments] = useState([]);
  const tabChangeHandler = (tabName: string) => {
    setTab(tabName);
  };

  useEffect(() => {
    setPayments([]);
  }, [tab]);

  return (
    <ClientLayout>
      <PageTitle title={'Payments'} description={''} />
      <Tabs callback={tabChangeHandler}></Tabs>
      <PaymentList items={payments}></PaymentList>
    </ClientLayout>
  );
};

export default PaymentsPage;
