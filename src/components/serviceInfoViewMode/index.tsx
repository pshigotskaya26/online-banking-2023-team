import {
  faCheck,
  faFingerprint,
  faKeyboard,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC} from "react";
import IService from "../../types/interfaces/IService";

interface ServiceInfoViewModeProps {
  service: IService
}

const ServiceInfoViewMode: FC<ServiceInfoViewModeProps> = ({service}) => {
  const {id, title, isAvailable, code} = service

  const values = [
    {
      title: "Id",
      value: id ,
      icon: faFingerprint,
    },
    {
      title: "Title",
      value: title ,
      icon: faNewspaper,
    },
    {
      title: "Code",
      value: code,
      icon: faKeyboard,
    },
    {
      title: "Service availability",
      value: isAvailable ? "Available" : "Not available",
      icon: faCheck,
    },
  ]
  return <>
    {
      values.map(({title, value, icon}) => {
        return <div key={title} className="flex w-full mb-2 items-center space-x-3 border rounded-2xl p-0.5  min-h-[2.8em]">
          <div className={"w-1/12 text-center"}>
            <FontAwesomeIcon icon={icon} size={"lg"} className={"text-blue-600"}/>
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