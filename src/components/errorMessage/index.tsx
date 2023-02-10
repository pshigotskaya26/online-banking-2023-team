import React from "react";

export interface ErrorMessageProps {
  text: string,
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({text}) => {
  return <div
    className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
    role='alert'
  >
    {text}
  </div>
}

export default ErrorMessage