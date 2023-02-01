import {Dispatch} from "redux"
import {servicesAPI} from "../../api";
import {ServicesActions, ServicesActionTypes} from "../types/services";

export const fetchServices = () => {
  return (dispatch: Dispatch<ServicesActions>) => {
    const response = servicesAPI.fetchServices()
    dispatch({type: ServicesActionTypes.FETCH_SERVICES, payload: response})
  }
}