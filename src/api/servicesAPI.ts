import IService from "../types/interfaces/IService";
import servicesData from "../data/services";

class ServicesAPI {
  fetchServices(): IService[] {
    let res: IService[] = []
    if (localStorage.getItem("services")) {
      const data = JSON.parse(localStorage.getItem("services") || "")
      if (Array.isArray(data)) res = data
    } else {
      res = servicesData
    }
    return res
  }

  createService(service: IService) {
    let services = localStorage.getItem("services")
    if (!services) {
      localStorage.setItem("services", JSON.stringify([service]))
    } else {
      let arr = JSON.parse(services) as IService[]
      let servicesWithCode = arr.filter(el => el.code !== service.code)
      console.log(servicesWithCode.length)
      if (!servicesWithCode.length) {
        throw new Error("Такой код существует")
      } else {
        arr.push(service)
        localStorage.setItem("services", JSON.stringify(arr))
      }
    }
  }


}

const servicesAPI = new ServicesAPI();
export default servicesAPI;