import React, {FC, useEffect, useState} from "react";
import IService from "../../types/interfaces/IService";
import Button from "../button";
import ServiceInfoViewMode from "../serviceInfoViewMode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEdit} from "@fortawesome/free-solid-svg-icons";
import ServiceCreate from "../serviceCreate";

interface ServiceInfoProps {
  service: IService,
  handleDeleteService: (id: number) => void,
  handleUpdateService: (service: IService) => void,
  handleAvailabilityService: (id: number) => void
}

const ServiceInfo: FC<ServiceInfoProps> = ({service, handleDeleteService, handleUpdateService, handleAvailabilityService}) => {
  const [editMode, setEditMode] = useState(false)
  const [serviceActive, setServiceActive] = useState(service)
  console.log(serviceActive.isAvailable)
  useEffect(() => {
    setServiceActive(service)
  }, [service])
  const handleModeView = () => {
    setEditMode(!editMode)
  }

  return <>
    <div className={"flex justify-between"}>
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white truncate">
        {serviceActive.title}
      </h5>
      <div>
        <button onClick={handleModeView}>
          <FontAwesomeIcon
            icon={editMode ? faClose : faEdit}
            size={"lg"}
            className={"text-gray-600 hover:text-blue-600 "}/>
        </button>
      </div>
    </div>

    <div className={"flex flex-wrap"}>
      {editMode
        ? <ServiceCreate title={"Update service"} textButton={"Update"} service={service} callback={handleUpdateService}/>
        : <ServiceInfoViewMode service={service}/>
      }

      {
        !editMode &&       <div className={"w-full  flex justify-center"}>
          <div className={"pr-1"}>
            <Button text={"Delete"} handleButton={() => handleDeleteService(serviceActive.id)} isDisable={false}/>
          </div>
          <div>
            <Button
                text={serviceActive.isAvailable ? "Disable" : "Enable"}
                handleButton={() => handleAvailabilityService(serviceActive.id)} isDisable={false}
            />
          </div>
        </div>
      }

    </div>
  </>
}

export default ServiceInfo