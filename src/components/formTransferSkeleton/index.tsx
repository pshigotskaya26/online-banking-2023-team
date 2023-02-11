import React, { FC } from 'react';

interface FormTransferSkeletonProps {
}

const FormTransferSkeleton: FC<FormTransferSkeletonProps> = () => {
  return <>
    <div role='status' className='animate-pulse min-h-[300px]'>
      <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto'></div>
      <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto'></div>
      <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto'></div>
      <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  </>
    ;
};

export default FormTransferSkeleton;