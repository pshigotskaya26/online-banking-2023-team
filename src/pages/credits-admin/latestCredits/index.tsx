import { Link } from 'react-router-dom';
import { getStringDate } from '../../../utils/formateDateTime';
import React, { FC } from 'react';
import ICredit from '../../../types/interfaces/ICredit';
import EmptyBox from '../../../components/enptyBox';
import { getPaidSumm } from '../../../utils/getPaidSumm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

interface LatestCreditsProps {
  credits: ICredit[];
}

const LatestCredits: FC<LatestCreditsProps> = ({ credits }) => {
  return (
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
            {credits.length ? (
              credits.map((el: ICredit) => {
                const paidSummCredit = el.arrOfPayments
                  ? getPaidSumm(el.arrOfPayments)
                  : 0;

                return (
                  <li className="py-3 sm:py-4" key={el.id}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center min-w-0">
                        {el.status === 'close' ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            size={'2xl'}
                            className={'text-blue-800'}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faSpinner}
                            size={'2xl'}
                            className={'text-blue-800'}
                          />
                        )}

                        <div className="ml-3">
                          <Link
                            to={'/credits-admin/' + el.id}
                            className="font-medium text-gray-900 truncate dark:text-white"
                          >
                            {el.entity} (ФИО)
                          </Link>
                          <div className="flex items-center justify-end flex-1 text-sm">
                            <span className="ml-2 text-gray-500">
                              {getStringDate(el.dateStart)} -{' '}
                              {getStringDate(el.dateStart + el.term * 86400000)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`inline-flex items-center text-base font-semibold 
                          ${
                            paidSummCredit === el.summOfCredit
                              ? 'text-gray-400'
                              : 'text-gray-900'
                          }
                        `}
                      >
                        ${paidSummCredit} / ${el.summOfCredit}
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <EmptyBox text={'Credits is not exist'} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LatestCredits;
