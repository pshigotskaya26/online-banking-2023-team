import React, {FC, useState} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ServiceInfoItemEditableProps {
  value: string,
  title: string | number | boolean,
  icon: IconProp
}

const ServiceInfoItemEditable: FC<ServiceInfoItemEditableProps> = ({title, value, icon}) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  return <div className="flex w-full mb-2 items-center space-x-3 border rounded-2xl p-0.5 ">
    <div className={"w-1/12 text-center"}>
      <FontAwesomeIcon icon={icon} size={"lg"} className={"text-blue-600"}/>
    </div>
    <div className="font-medium w-10/12 dark:text-white text-left truncate">
      <div className="text-sm font-light text-gray-500 dark:text-gray-400"> {value} </div>
      <div>{title}</div>
    </div>
    <div className={"w-1/12"}>
      <button>C</button>
    </div>
  </div>
}

export default ServiceInfoItemEditable