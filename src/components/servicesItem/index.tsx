import React from "react";
import IService from "../../types/interfaces/IService";
import {faReceipt, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ServicesItemProps {
  service: IService,
  handleServiceItem: (id: IService) => void
}

const ServicesItem: React.FC<ServicesItemProps> = ({service, handleServiceItem}) => {
  const currentIcon = service.icon ? service.icon : faReceipt
  return <div className={"flex justify-between"}>
    <button onClick={() => handleServiceItem(service)}
            className={`flex w-full text-left items-center rounded-lg p-1.5
            ${service.isActive && "bg-gray-200"}
            text-gray-900
            truncate ...`}>
      <FontAwesomeIcon icon={currentIcon} size={"lg"} className={"text-blue-600"}/>
      <span className="flex-1 ml-2"><span className={"text-gray-600 text-sm mr-1"}>{service.code}</span>
      <span className={"font-medium"}>{service.title}</span></span>
      {service.isAvailable &&  <FontAwesomeIcon icon={faEyeSlash} size={"sm"} className={"text-gray-300"}/>}
    </button>
  </div>
}

export default ServicesItem