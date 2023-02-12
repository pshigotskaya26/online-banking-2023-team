import React, { FC } from 'react';

interface InputNumberProps {
  label: string,
  name: string,
  value: number,
  setValue: (v: number) => void,
  type?: 'number' | 'text'

}

const InputNumber: FC<InputNumberProps> = (props) => {
  const {
    label,
    name,
    value,
    setValue,
  } = props;
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };


  return <>
    <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{label}</label>
    <input type='number' min={'0'} value={value} name={name}
           className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600
           focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600
           dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
           p-2.5 ${value === 0 && 'text-gray-50'}  
           `}
           onChange={handleInputValue}
    />
  </>;
};

export default InputNumber;