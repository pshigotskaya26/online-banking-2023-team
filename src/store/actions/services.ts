import {Dispatch} from "redux"
import {ServicesActions, ServicesActionTypes} from "../types/services";
import servicesData from "../../data/services";

export const fetchServices = () => {
  return (dispatch: Dispatch<ServicesActions>) => {
    // console.log("запрос в фейковую БД на получение услуг")
    let data = servicesData
    dispatch({type: ServicesActionTypes.FETCH_SERVICES, payload: data})
  }
}