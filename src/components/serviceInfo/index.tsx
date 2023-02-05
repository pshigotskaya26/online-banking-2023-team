import React, {FC, useState} from "react";
import IService from "../../types/interfaces/IService";
import Button from "../button";
import {useActions} from "../../hooks/useActions";
import ServiceInfoViewMode from "../serviceInfoViewMode";
import ServiceInfoEditMode from "../serviceInfoEditMode";

interface ServiceInfoProps {
  service: IService
}

const ServiceInfo: FC<ServiceInfoProps> = ({service}) => {
  const {deleteService} = useActions()
  const [editMode, setEditMode] = useState(false)
  const {id, title} = service

  const handleDeleteService = () => {
    deleteService(id)
  }


  return <div
    className="w-full p-4 bg-white border min-h-[300px] border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white truncate">
      {title}
    </h5>
    <div className={"flex flex-wrap"}>
      { editMode
        ? <ServiceInfoEditMode service={service}/>
        : <ServiceInfoViewMode service={service}/>
      }

      <div className={"w-full border-t-2 flex justify-center"}>
        <div className={"pr-1"}>
          <Button text={"Delete"} handleButton={handleDeleteService} isDisable={false}/>
        </div>
        <div>
          <Button text={"Disable"} handleButton={() => {
          }} isDisable={false}/>
        </div>
      </div>
    </div>
  </div>
}

export default ServiceInfo