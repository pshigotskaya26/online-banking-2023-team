import React from "react";
import { TypeMessage } from '../../types/enums/TypeMessage';

export interface ErrorMessageProps {
  text: string,
  type: TypeMessage
}


const ErrorMessage: React.FC<ErrorMessageProps> = ({text, type}) => {
  return <div
    className={`p-4 mb-4 text-sm text-red-800 rounded-lg 
    ${type === TypeMessage.ERROR && "bg-red-50"}
    ${type === TypeMessage.WARNING && "bg-yellow-50"}
    ${type === TypeMessage.SUCCESS && "bg-green-50"}
    `}
    role='alert'
  >
    {text}
  </div>
}

export default ErrorMessage