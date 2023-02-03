import {useAppSelector} from "../../hooks/useAppSelector";
import React, {useEffect, useState} from "react";
import {useActions} from "../../hooks/useActions";
import AdminLayout from "../../layouts/admin";
import PageTitle from "../../components/pageTitle";
import ServicesList from "../../components/servicesList";
import ServiceInfo from "../../components/serviceInfo";
import ServiceNew from "../../components/serviceNew";
import IService from "../../types/interfaces/IService";

export const ServicesPage = () => {
  const {fetchServices} = useActions()
  let {services, loadingServices} = useAppSelector(state => state.services)

  useEffect(() => {
    fetchServices()
  }, [])

  const [activeServiceInfo, setActiveServiceInfo] = useState<IService>({} as IService)
  const [isVisibleInfo, serIsVisibleInfo] = useState(false)
  const [isVisibleForm, serIsVisibleForm] = useState(false)

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

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className={"flex flex-col basis-1/3"}>
          <ServicesList
            services={services}
            loadingServices={loadingServices}
            setActiveComponent={setActiveComponent}/>
        </div>
        <div className={"flex flex-col basis-2/3 "}>
          {isVisibleForm && <ServiceNew/>}
          {isVisibleInfo && <ServiceInfo service={activeServiceInfo}/>}
        </div>
      </div>
    </>
  </AdminLayout>
}
