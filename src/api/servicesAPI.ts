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

}

const servicesAPI = new ServicesAPI();
export default servicesAPI;