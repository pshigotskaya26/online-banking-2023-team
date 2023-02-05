import React, {FC} from "react";

interface InputTextProps {
  label: string,
  name: string,
  placeholder: string,
  value: string,
  setValue: (v: string) => void,
  type?: "number" | "text"

}

const InputText: FC<InputTextProps> = (props) => {
  const {
    label,
    name,
    placeholder,
    value,
    setValue,
    type = "text",
  } = props
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleKeyPressValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    }
  }


  return <>
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input type="text"
           name={name}
           id={name}
           value={value}
           className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600
           focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600
           dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
           p-2.5
           `}
           onChange={handleInputValue}
           placeholder={placeholder}
           onKeyDown={handleKeyPressValue}
    />
  </>
}

export default InputText