import {Dispatch} from "redux"
import {servicesAPI} from "../../api";
import {ServicesActions, ServicesActionTypes} from "../types/services";

export const fetchServices = () => {
  return (dispatch: Dispatch<ServicesActions>) => {
    try {
      dispatch({type: ServicesActionTypes.FETCH_SERVICES})
      const response = servicesAPI.fetchServices()
      setTimeout(() => {
        dispatch({type: ServicesActionTypes.FETCH_SERVICES_SUCCESS, payload: response})
      }, 500)
    } catch (e) {
      dispatch({
        type: ServicesActionTypes.FETCH_SERVICES_ERROR,
        payload: "Не удалозь загрузить список услуг"
      })
    }
  }
}