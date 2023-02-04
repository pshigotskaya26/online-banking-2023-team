import {Dispatch} from "redux"
import {servicesAPI} from "../../api";
import {ServicesActions, ServicesActionTypes} from "../types/services";
import IService from "../../types/interfaces/IService";

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


export const addService = (service: IService) => {
  return (dispatch: Dispatch<ServicesActions>) => {
    try {
      dispatch({type: ServicesActionTypes.FETCH_SERVICES})
      const response = servicesAPI.createService(service)
      setTimeout(() => {
        if (!(response instanceof Error)) {
          dispatch({type: ServicesActionTypes.FETCH_SERVICES_SUCCESS, payload: response})
        }
      }, 500)
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: ServicesActionTypes.ADD_NEW_SERVICE_ERROR,
          payload: e.message
        })
      }
    } finally {
      dispatch({type: ServicesActionTypes.FETCH_SERVICES_ERROR, payload: ""})
    }
  }
}