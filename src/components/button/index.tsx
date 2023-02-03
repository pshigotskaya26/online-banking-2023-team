import React from "react";

export interface ButtonProps {
  text: string,
  isDisable: boolean,
  handleButton: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({text, isDisable, handleButton}) => {
  return <button
    className={`bg-blue-700 text-white primary-color inline-flex items-center px-5 py-2.5 mt-4 ` +
      "sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg " +
      `focus:ring-4 focus:ring-primary-200 hover:bg-primary-800
      ${isDisable && "bg-gray-200"}
      `}

    onClick={handleButton}
  >{text}</button>
}

export default Button