import ClientLayout from '../../layouts/client';
import React from 'react';
import PageTitle from '../../components/pageTitle';

const CreditInfoAdmin = () => {
  return (
    <ClientLayout>
      <>
        <PageTitle title={'Кридит информация'} />
        <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
          <div
            className="items-center justify-between p-4 bg-white border border-gray-200
          rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div className="w-full">
              <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                Назначение платежа
              </h3>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                для того-то
              </span>
            </div>
            <div className="w-full" id="new-products-chart">
              <div
                id="apexchartsgswuvlzu"
                className="apexcharts-canvas apexchartsgswuvlzu apexcharts-theme-light"
              >
                <div className="apexcharts-legend"></div>
                <div className="apexcharts-tooltip apexcharts-theme-light">
                  <div className="apexcharts-tooltip-title"></div>
                  <div className="apexcharts-tooltip-series-group">
                    <span className="apexcharts-tooltip-marker"></span>
                    <div className="apexcharts-tooltip-text">
                      <div className="apexcharts-tooltip-y-group">
                        <span className="apexcharts-tooltip-text-y-label"></span>
                        <span className="apexcharts-tooltip-text-y-value"></span>
                      </div>
                      <div className="apexcharts-tooltip-goals-group">
                        <span className="apexcharts-tooltip-text-goals-label"></span>
                        <span className="apexcharts-tooltip-text-goals-value"></span>
                      </div>
                      <div className="apexcharts-tooltip-z-group">
                        <span className="apexcharts-tooltip-text-z-label"></span>
                        <span className="apexcharts-tooltip-text-z-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                  <div className="apexcharts-yaxistooltip-text"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between p-4 bg-white border border-gray-200
          rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div className="w-full">
              <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                Сумма оплаченная / Всего
              </h3>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                2,340
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  12.5%
                </span>
              </p>
            </div>
            <div className="w-full" id="new-products-chart">
              <div
                id="apexchartsgswuvlzu"
                className="apexcharts-canvas apexchartsgswuvlzu apexcharts-theme-light"
              >
                <div className="apexcharts-legend"></div>
                <div className="apexcharts-tooltip apexcharts-theme-light">
                  <div className="apexcharts-tooltip-title"></div>
                  <div className="apexcharts-tooltip-series-group">
                    <span className="apexcharts-tooltip-marker"></span>
                    <div className="apexcharts-tooltip-text">
                      <div className="apexcharts-tooltip-y-group">
                        <span className="apexcharts-tooltip-text-y-label"></span>
                        <span className="apexcharts-tooltip-text-y-value"></span>
                      </div>
                      <div className="apexcharts-tooltip-goals-group">
                        <span className="apexcharts-tooltip-text-goals-label"></span>
                        <span className="apexcharts-tooltip-text-goals-value"></span>
                      </div>
                      <div className="apexcharts-tooltip-z-group">
                        <span className="apexcharts-tooltip-text-z-label"></span>
                        <span className="apexcharts-tooltip-text-z-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                  <div className="apexcharts-yaxistooltip-text"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between p-4 bg-white border border-gray-200
          rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
          >
            <div className="w-full">
              <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                Сумма пени
              </h3>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                2,340$
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  12.5%
                </span>
              </p>
            </div>
            <div className="w-full" id="new-products-chart">
              <div
                id="apexchartsgswuvlzu"
                className="apexcharts-canvas apexchartsgswuvlzu apexcharts-theme-light"
              >
                <div className="apexcharts-legend"></div>
                <div className="apexcharts-tooltip apexcharts-theme-light">
                  <div className="apexcharts-tooltip-title"></div>
                  <div className="apexcharts-tooltip-series-group">
                    <span className="apexcharts-tooltip-marker"></span>
                    <div className="apexcharts-tooltip-text">
                      <div className="apexcharts-tooltip-y-group">
                        <span className="apexcharts-tooltip-text-y-label"></span>
                        <span className="apexcharts-tooltip-text-y-value"></span>
                      </div>
                      <div className="apexcharts-tooltip-goals-group">
                        <span className="apexcharts-tooltip-text-goals-label"></span>
                        <span className="apexcharts-tooltip-text-goals-value"></span>
                      </div>
                      <div className="apexcharts-tooltip-z-group">
                        <span className="apexcharts-tooltip-text-z-label"></span>
                        <span className="apexcharts-tooltip-text-z-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                  <div className="apexcharts-yaxistooltip-text"></div>
                </div>
              </div>
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
                  Дата платежа
                </th>
                <th
                  scope="col"
                  className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Пеня
                </th>
                <th
                  scope="col"
                  className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  Статус
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
                return (
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                      11
                    </td>

                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      02.02.2023
                    </td>
                    <td
                      className="p-4 text-base font-medium text-gray-900
    whitespace-nowrap dark:text-white cursor-pointer"
                    >
                      0
                    </td>
                    <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />
                        In progress
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </ClientLayout>
  );
};

export default CreditInfoAdmin;
