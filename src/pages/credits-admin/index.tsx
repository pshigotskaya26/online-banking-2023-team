import ClientLayout from '../../layouts/client';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { fetchCreditsAll } from '../../store/actions/credits-admin';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getStringDate } from '../../utils/formateDateTime';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CreditsAdmin = () => {
  const { fetchCreditsAll } = useActions();
  const { credits } = useAppSelector((state) => state.creditsAdmin);
  useEffect(() => {
    fetchCreditsAll();
  }, []);

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ClientLayout>
      <>
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
                {credits.map((el) => {
                  return (
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <div className="ml-3">
                            <Link
                              to={'/credits-admin/' + 2}
                              className="font-medium text-gray-900 truncate dark:text-white"
                            >
                              {el.entity} (ФИО)
                            </Link>
                            <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                              2%
                              <span className="ml-2 text-gray-500">
                                {getStringDate(el.dateStart)} -{' '}
                                {getStringDate(
                                  el.dateStart + el.term * 86400000,
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          ${el.summPaid} / ${el.summOfCredit}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={'flex flex-wrap justify-evenly mt-2'}>
          <div className={'border rounded-2xl p-4'}>
            <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Платежи за последнюю неделю
            </h3>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className={'border rounded-2xl p-4'}>
            <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Всего взято кредитов за эту неделю
            </h3>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className={'border rounded-2xl p-4'}>
            <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Всего взято кредитов за эту неделю
            </h3>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className={'border rounded-2xl p-4'}>
            <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Всего взято кредитов за эту неделю
            </h3>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className={'border rounded-2xl p-4'}>
            <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Всего взято кредитов за эту неделю
            </h3>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </>
    </ClientLayout>
  );
};

export default CreditsAdmin;
