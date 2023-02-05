import React, {useEffect, useState} from "react";
import IService from "../../types/interfaces/IService";
import ServicesItem from "../servicesItem";
import ServicesListSkeleton from "../servicesListSceleton";
import EmptyBox from "../enptyBox";
import Button from "../button";


interface ServicesListProps {
  services: IService[],
  loadingServices: boolean,
  setActiveComponent: (service?: IService) => void,
  isActiveFormNewProduct: boolean
}

const ServicesList: React.FC<ServicesListProps> = (props) => {
  const {
    services,
    loadingServices,
    setActiveComponent,
    isActiveFormNewProduct
  } = props
  const [servicesItems, setServicesItems] = useState<IService[]>(services)

  useEffect(() => {
    setServicesItems(services)
  }, [services])

  const handleButtonNewService = () => {
    setActiveComponent()
  }

  const handleServiceItem = (service: IService) => {
    const servicesNew = servicesItems.map(el => el.id === service.id ? {...el, isActive: true} : {
      ...el,
      isActive: false
    })
    setServicesItems(servicesNew)
    setActiveComponent(service)
  }
  const servicesArr = servicesItems.map(service => {
    return <ServicesItem service={service} key={service.id} handleServiceItem={handleServiceItem}/>
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
    <Button text={"Add Service"} handleButton={handleButtonNewService} isDisable={isActiveFormNewProduct}/>
  </div>
}

export default ServicesList;