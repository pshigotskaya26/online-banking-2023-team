import ClientLayout from '../../layouts/client';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { fetchCreditsAll } from '../../store/actions/credits-admin';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import LatestCredits from './latestCredits';

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
        <LatestCredits credits={credits} />
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
