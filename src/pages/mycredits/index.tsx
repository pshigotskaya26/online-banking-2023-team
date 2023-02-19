import ClientLayout from '../../layouts/client';
import PageTitle from '../../components/pageTitle';
import CreditList from '../../components/creditList';

const MyCreditsPage = () => {
  return (
    <ClientLayout>
      <PageTitle title={'My credits'} />
      <CreditList></CreditList>
    </ClientLayout>
  );
};

export default MyCreditsPage;
