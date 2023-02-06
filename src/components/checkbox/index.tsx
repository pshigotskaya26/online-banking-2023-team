import React, {FC} from "react";

interface CheckboxProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    isChecked: boolean,
    label: string
}

const Checkbox: FC<CheckboxProps> = ({label, isChecked, handleChange}) => {
    return <>
       <label
           htmlFor="category"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
       >
          Available
       </label>

        <input type="checkbox" id={label} checked={isChecked} onChange={handleChange}
               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />


    </>
}

export default Checkbox