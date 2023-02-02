import IService from "../types/interfaces/IService";

class ServicesAPI {
  fetchServices(): IService[] {
    let res: IService[] = []
    if (localStorage.getItem("services")) {
      const data = JSON.parse(localStorage.getItem("services") || "")
      if (Array.isArray(data)) res = data
    }
    return res
  }

}

const servicesAPI = new ServicesAPI();
export default servicesAPI;