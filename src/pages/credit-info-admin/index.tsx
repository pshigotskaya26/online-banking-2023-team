import ClientLayout from '../../layouts/client';
import React, { useEffect } from 'react';
import PageTitle from '../../components/pageTitle';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { getStringDate } from '../../utils/formateDateTime';
import { getFineSumm, getPaidSumm } from '../../utils/getPaidSumm';

const CreditInfoAdmin = () => {
  let { id } = useParams();

  const { fetchCreditInfo } = useActions();
  const { creditInfo } = useAppSelector((state) => state.creditsAdmin);
  const summPaid = getPaidSumm(creditInfo ? creditInfo.arrOfPayments : []);
  const summFine = getFineSumm(creditInfo ? creditInfo.arrOfPayments : []);

  useEffect(() => {
    fetchCreditInfo(Number(id));
  }, [id]);

  return (
    <ClientLayout>
      {creditInfo && (
        <>
          <PageTitle title={'Credit information: #' + creditInfo.id} />
          <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-2">
            <div
              className="items-center justify-between p-4 bg-white border border-gray-200
          rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
            >
              <div className="w-full">
                <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Type
                </h3>
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                  {creditInfo.entity}
                  <span className={'text-sm'}>
                    [
                    {creditInfo.arrOfPayments
                      ? creditInfo.arrOfPayments.length
                      : 0}{' '}
                    days]
                  </span>
                </span>
              </div>
            </div>
            <div
              className="items-center justify-between p-4 bg-white border border-gray-200
          rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
            >
              <div className="w-full">
                <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Status
                </h3>
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                  {creditInfo.status}
                </span>
              </div>
            </div>
            <div
              className="items-center justify-between p-4 bg-white border border-gray-200
          rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
            >
              <div className="w-full">
                <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Amount Paid / Total
                </h3>
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                  {summPaid} / {creditInfo.summOfCredit}
                </span>
              </div>
            </div>
            <div
              className="items-center justify-between p-4 bg-white border border-gray-200
          rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
            >
              <div className="w-full">
                <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Amount of fine
                </h3>
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                  {summFine}
                </span>
              </div>
            </div>
          </div>
          <div className={'mt-6'}>
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Index
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Fine
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {creditInfo.arrOfPayments &&
                  creditInfo.arrOfPayments.map((payment, i) => {
                    return (
                      <tr
                        key={payment.id}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                          {i + 1}
                        </td>

                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {getStringDate(payment.dateOfContribution)}
                        </td>
                        <td
                          className="p-4 text-base font-medium text-gray-900
    whitespace-nowrap dark:text-white cursor-pointer"
                        >
                          {payment.fine}
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            {payment.status}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </ClientLayout>
  );
};

export default CreditInfoAdmin;
