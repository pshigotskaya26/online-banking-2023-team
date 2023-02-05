import {useAppSelector} from "../../hooks/useAppSelector";
import React, {useEffect, useState} from "react";
import {useActions} from "../../hooks/useActions";
import AdminLayout from "../../layouts/admin";
import PageTitle from "../../components/pageTitle";
import ServicesList from "../../components/servicesList";
import ServiceInfo from "../../components/serviceInfo";
import IService from "../../types/interfaces/IService";
import ServiceCreate from "../../components/serviceCreate";

export const ServicesPage = () => {
  const {fetchServices, deleteService} = useActions()
  let {services, loadingServices} = useAppSelector(state => state.services)

  useEffect(() => {
    fetchServices()
  }, [])

  const [activeServiceInfo, setActiveServiceInfo] = useState<IService>({} as IService)
  const [isVisibleInfo, serIsVisibleInfo] = useState(false)
  const [isVisibleForm, serIsVisibleForm] = useState(false)

  const handleDeleteService = (id: number) => {
    deleteService(id)
    serIsVisibleInfo(false)
  }
  const handleAddService = (service: IService) => {
    console.log(service)
  }
  const setActiveComponent = (service?: IService) => {
    if (service?.id) {
      setActiveServiceInfo(service)
      serIsVisibleInfo(true)
      serIsVisibleForm(false)
    } else {
      serIsVisibleInfo(false)
      serIsVisibleForm(true)
    }
  }

  return <AdminLayout>
    <>
      <PageTitle title={"Services for admin"} description={"Service Management Page"}/>

      <div className="flex grow-0">
        <div className={"flex flex-col grow-0 w-2/6 mr-2"}>
          <ServicesList
            services={services}
            loadingServices={loadingServices}
            setActiveComponent={setActiveComponent}
            isActiveFormNewProduct={isVisibleForm}
          />
        </div>
        <div className={"flex flex-col w-full w-4/6 border shadow rounded-xl min-h-[300px]"}>
          <div className={"w-full p-4 max-w-2xl mx-auto"}>
            {isVisibleForm && <ServiceCreate title={"Add a new product"} textButton={"Add service"} callback={handleAddService}/>}
            {isVisibleInfo && <ServiceInfo service={activeServiceInfo} handleDeleteService={handleDeleteService}/>}
          </div>
        </div>
      </div>
    </>
  </AdminLayout>
}
