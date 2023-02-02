import React from "react";
import IService from "../../types/interfaces/IService";
import ServicesItem from "../servicesItem";
import ServicesListSkeleton from "../servicesListSceleton";
import EmptyBox from "../enptyBox";


interface ServicesListProps {
  services: IService[],
  loadingServices: boolean,
  setActiveComponent: (service?: IService) => void
}

const ServicesList: React.FC<ServicesListProps> = ({services, loadingServices, setActiveComponent}) => {


  const handleButtonNewService = () => {
    setActiveComponent()
  }

  const handleServiceItem = (service: IService) => {
    setActiveComponent(service)
  }

  const servicesItems = services.map(service => {
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
            ? servicesItems
            : <EmptyBox/>
      }
    </div>

    <button onClick={handleButtonNewService}>
      Добавить услугу
    </button>
  </div>
}

export default ServicesList;