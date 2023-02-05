import React, {FC} from "react";
import IService from "../../types/interfaces/IService";
import Button from "../button";
import {useActions} from "../../hooks/useActions";

interface ServiceInfoProps {
  service: IService
}

const ServiceInfo: FC<ServiceInfoProps> = ({service}) => {
  const { deleteService } = useActions()
  const {code, icon, isAvailable, id, title} = service

  const handleDeleteService = () => {
    deleteService(id)
  }


  return <div
    className="w-full p-4 bg-white border min-h-[300px] border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white truncate">
      {title}
    </h5>
    <div className={"flex flex-wrap"}>

      {/*{*/}
      {/*  dataServiceInfo.map(el => {*/}
      {/*    return <ServiceInfoItemEditable*/}
      {/*      key={el.title}*/}
      {/*      title={el.title}*/}
      {/*      icon={el.icon}*/}
      {/*      childrenView={el.childrenView}*/}
      {/*      childrenEdit={el.childrenEdit}*/}
      {/*      isEditable={el.isEditable}*/}
      {/*    />*/}
      {/*  })*/}
      {/*}*/}
      <div className={"w-full border-t-2 flex justify-center"}>
        <div className={"pr-1"}>
          <Button text={"Delete"} handleButton={handleDeleteService} isDisable={false} />
        </div>
        <div>
          <Button text={"Disable"} handleButton={() => {}} isDisable={false} />
        </div>
      </div>
    </div>
  </div>
}

export default ServiceInfo