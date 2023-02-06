import {useAppSelector} from "../../hooks/useAppSelector";
import React, { FC, useEffect } from "react";
import {useActions} from "../../hooks/useActions";
import AdminLayout from "../../layouts/admin";
import PageTitle from "../../components/pageTitle";
import ServicesList from "../../components/servicesList";
import ServiceInfo from "../../components/serviceInfo";
import IService from "../../types/interfaces/IService";
import ServiceCreate from "../../components/serviceCreate";
import EmptyBox from "../../components/enptyBox";
import {updateService} from "../../store/actions/services";
import {ModesServicesPage} from "../../types/enums/ModesServicesPage";

interface ServicesPageProps {
}

export const ServicesPage: FC<ServicesPageProps> = () => {
  const {
    fetchServices, deleteService, addService, updateService,
    handleAvailabilityService, setModeServicePage, setActiveService
  } = useActions()
  let {
    services,
    loadingServices,
    activeService,
    errorAddNewService,
    mode,
    loadingCreateService
  } = useAppSelector(state => state.services)

  useEffect(() => {
    fetchServices()
  }, [])

  const handleDeleteService = (id: number) => {
    deleteService(id)
  }
  const handleAddService = (service: IService) => {
    addService(service)
  }

  const handleUpdateService = (service: IService) => {
    updateService(service)
  }

  const handlerAvailabilityService = (id: number) => {
    handleAvailabilityService(id)
  }

  const handleButtonNewService = () => {
    setModeServicePage(ModesServicesPage.create)
  }

  const handleActiveService = (service: IService) => {
    setActiveService(service)
    setModeServicePage(ModesServicesPage.infoService)
  }

  return <AdminLayout>
    <>
      <PageTitle title={"Services for admin"} description={"Service Management Page"}/>

      <div className="flex grow-0">
        <div className={"flex flex-col grow-0 w-2/6 mr-2"}>
          <ServicesList
            services={services}
            activeService={activeService}
            loadingServices={loadingServices}
            handleButtonNewService={handleButtonNewService}
            handleServiceItem={handleActiveService}
          />
        </div>
        <div className={"flex flex-col w-full w-4/6 border shadow rounded-xl min-h-[300px]"}>
          <div className={"w-full p-4 max-w-2xl mx-auto"}>
            {
              mode === ModesServicesPage.list && <EmptyBox/>
            }
            {
              mode === ModesServicesPage.create && <ServiceCreate
                title={"Add a new product"}
                error={errorAddNewService}
                loadingCreateService={loadingCreateService}
                textButton={"Add service"}
                callback={handleAddService}
              />
            }
            {
              (mode === ModesServicesPage.infoService && activeService) && <ServiceInfo
                service={activeService}
                handleDeleteService={handleDeleteService}
                handleUpdateService={handleUpdateService}
                errorAddNewService={errorAddNewService}
                loadingCreateService={loadingCreateService}
                handleAvailabilityService={handlerAvailabilityService}
              />
            }
          </div>
        </div>
      </div>
    </>
  </AdminLayout>
}
