import React, {useEffect, useState} from "react";
import IService from "../../types/interfaces/IService";
import ServicesItem from "../servicesItem";
import ServicesListSkeleton from "../servicesListSceleton";
import EmptyBox from "../enptyBox";
import Button from "../button";


interface ServicesListProps {
  services: IService[],
  loadingServices: boolean,
  handleButtonNewService: () => void,
  handleServiceItem: (service: IService) => void,
  activeService?: IService
}

const ServicesList: React.FC<ServicesListProps> = (props) => {
  const {
    services,
    loadingServices,
    handleButtonNewService,
    handleServiceItem,
    activeService
  } = props
  const [servicesItems, setServicesItems] = useState<IService[]>(services)
  useEffect(() => {
    setServicesItems(services)
  }, [services])


  const servicesArr = servicesItems.map(service => {
    return <ServicesItem
      service={service} isActive={service.id === activeService?.id} key={service.id}
      handleServiceItem={() => handleServiceItem(service)}/>
  })

  return <div
    className="w-full p-4 flex flex-col bg-gray-50 border min-h-[300px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
      Services List
    </h5>

    <div className="my-4 grow space-y-3">
      {
        loadingServices ?
          <ServicesListSkeleton/>
          : services.length
            ? servicesArr
            : <EmptyBox/>
      }
    </div>
    <Button text={"Add Service"} handleButton={handleButtonNewService} isDisable={false}/>
  </div>
}

export default ServicesList;