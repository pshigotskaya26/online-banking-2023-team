import ClientLayout from '../../layouts/client';
import React from 'react';
import { Link } from 'react-router-dom';

const CreditsAdmin = () => {
  return (
    <ClientLayout>
      <div
        className={
          'p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'
        }
      >
        <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Latest credits
        </h3>

        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          <div className="pt-4" id="faq">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {[1, 2, 3, 4, 5].map((el) => {
                return (
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center min-w-0">
                        <div className="ml-3">
                          <Link
                            to={'/credits-admin/' + 2}
                            className="font-medium text-gray-900 truncate dark:text-white"
                          >
                            Апельсины (ФИО)
                          </Link>
                          <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                            2%
                            <span className="ml-2 text-gray-500">
                              13.02.2023 - 16.02.2023
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $25,543 / $0,543 / $98,543
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default CreditsAdmin;
