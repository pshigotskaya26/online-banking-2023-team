import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import React, { FC } from 'react';

interface GraphicLineItemProps {
  title: string;
  data: any;
}

const GraphicLineItem: FC<GraphicLineItemProps> = ({ title, data }) => {
  return (
    <div className={'border rounded-2xl p-4'}>
      <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
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
          dataKey="payment"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default GraphicLineItem;
