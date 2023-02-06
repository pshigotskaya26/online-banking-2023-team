import React from "react";

export interface ButtonProps {
  text: string,
  isDisable: boolean,
  isLoading?: boolean,
  handleButton: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({text, isDisable, isLoading = false, handleButton}) => {
  return <button
    className={`bg-blue-700 text-white text-center primary-color inline-flex items-center px-5 py-2.5 mt-4 ` +
      "sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg " +
      `focus:ring-4 focus:ring-primary-200 hover:bg-primary-800
      ${isDisable && "bg-gray-200 pointer-events-none"} 
      ${isLoading && "bg-blue-900"}`}

    onClick={handleButton}
  >{!isLoading ? text : "Loading..."}</button>
}

export default Button