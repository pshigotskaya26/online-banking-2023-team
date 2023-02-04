import React, {FC} from "react";
import IService from "../../types/interfaces/IService";
import ServiceInfoItemEditable from "../serviceInfoItemEditable";
import {faBuildingShield, faCheck, faHouse, faHashtag} from "@fortawesome/free-solid-svg-icons";
import Button from "../button";

interface ServiceInfoProps {
  service: IService
}

const ServiceInfo: FC<ServiceInfoProps> = ({service}) => {

  const {code, isAvailable, id, title} = service



  return <div
    className="w-full p-4 bg-white border min-h-[300px] border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
      {title}
    </h5>
    <div className={"flex flex-wrap"}>
      <ServiceInfoItemEditable title={id} value={"id"} icon={faCheck}/>
      <ServiceInfoItemEditable title={title} value={"Name"} icon={faHouse} />
      <ServiceInfoItemEditable title={code} value={"Code"} icon={faHashtag}/>
      <ServiceInfoItemEditable title={isAvailable} value={"Услуга доступна"} icon={faBuildingShield} />
      <div className={"w-full border-t-2"}>
        <Button text={"Delete"} handleButton={() => {}} isDisable={false} />
        <Button text={"Disable"} handleButton={() => {}} isDisable={false} />
      </div>
    </div>
  </div>
}

export default ServiceInfo