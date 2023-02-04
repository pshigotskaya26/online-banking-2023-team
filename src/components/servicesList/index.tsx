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

const ServicesList: React.FC<ServicesListProps> = ({
                                                     services,
                                                     loadingServices,
                                                     setActiveComponent,
                                                     isActiveFormNewProduct
                                                   }) => {
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
    className="w-full flex flex-col p-4 bg-gray-50 border min-h-[300px] border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
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