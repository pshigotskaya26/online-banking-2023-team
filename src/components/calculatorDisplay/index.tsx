import { FC } from 'react';

interface CalculatorDisplayProps {
  hasMemory: boolean;
  expression: string;
  value: string;
}

const CalculatorDisplay: FC<CalculatorDisplayProps> = ({ value}) => {
  return <div className='w-full bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right'>
    <div className='w-full py-5 px-6 text-6xl text-white font-thin'>{value}</div>
  </div>;
};

export default CalculatorDisplay;