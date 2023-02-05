import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC} from "react";
import IService from "../../types/interfaces/IService";
import {faBuildingShield} from "@fortawesome/free-solid-svg-icons";

interface ServiceInfoViewModeProps {
  service: IService
}

const ServiceInfoViewMode: FC<ServiceInfoViewModeProps> = ({service}) => {
  const {id, title, icon, isAvailable, code} = service

  const values = [
    {
      title: "Id",
      value: id ,
    },
    {
      title: "Title",
      value: title ,
    },
    {
      title: "Code",
      value: code,
    },
    {
      title: "Service availability",
      value: isAvailable ? "Available" : "Not available",
    },
  ]
  return <>
    {
      values.map(({title, value}) => {
        return <div key={title} className="flex w-full mb-2 items-center space-x-3 border rounded-2xl p-0.5  min-h-[2.8em]">
          <div className={"w-1/12 text-center"}>
            <FontAwesomeIcon icon={icon ? icon : faBuildingShield} size={"lg"} className={"text-blue-600"}/>
          </div>
          <div className="font-medium w-10/12 dark:text-white text-left truncate">
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">{title}</div>
            <div>{value}</div>
          </div>
        </div>
      })
    }

  </>
}

export default ServiceInfoViewMode