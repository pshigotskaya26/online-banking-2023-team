import { FC, ReactNode } from 'react';

interface CalculatorButtonProps {
  children: ReactNode,
  handlerButton: () => void;
}

const CalculatorButton: FC<CalculatorButtonProps> = ({ handlerButton, children }) => {
  return <button onClick={handlerButton}
                 className='w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white
                 text-xl font-light'>{children}
  </button>;
};

export default CalculatorButton;