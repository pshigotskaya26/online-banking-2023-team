import IService from "../types/interfaces/IService";
// import servicesData from "../data/services";

class ServicesAPI {
  fetchServices(): IService[] {
    let res: IService[] = []
    if (localStorage.getItem("services")) {
      const data = JSON.parse(localStorage.getItem("services") || "")
      if (Array.isArray(data)) res = data
    } else {
      res = []
    }
    return res
  }

  createService(serviceData: IService): IService[] | Error {

    if (!localStorage.getItem("services")) {
      let servicesNew: IService[] = [serviceData]
      localStorage.setItem("services", JSON.stringify(servicesNew))
      return servicesNew
    } else {
      let services = JSON.parse((localStorage.getItem("services") || "")) as IService[]
      let servicesWithCode = services.find(service => service.code === serviceData.code)

      if (!servicesWithCode) {
        let servicesNew: IService[] = [...services, serviceData]
        localStorage.setItem("services", JSON.stringify(servicesNew))
        return servicesNew
      } else {
        throw new Error("A service with this code exists")
      }
    }
  }

  deleteService(id: number) {
    let services = JSON.parse((localStorage.getItem("services") || "")) as IService[]
    let servicesNew: IService[] = services.filter(service => service.id !== id)
    localStorage.setItem("services", JSON.stringify(servicesNew))
  }


  updateService(serviceData: IService) {
    let services = JSON.parse((localStorage.getItem("services") || "")) as IService[]

    let servicesNew = services.map(service => {
      if (service.id === serviceData.id) {
        return serviceData
      }

      return service
    })
    localStorage.setItem("services", JSON.stringify(servicesNew))
  }

  handleAvailabilityService(id: number) {
    let services = JSON.parse((localStorage.getItem("services") || "")) as IService[]

    let servicesNew = services.map(service => {
      if (service.id === id) {
        return {...service, isAvailable: !service.isAvailable}
      }
      return service
    })
    localStorage.setItem("services", JSON.stringify(servicesNew))
  }

}

const servicesAPI = new ServicesAPI();
export default servicesAPI;