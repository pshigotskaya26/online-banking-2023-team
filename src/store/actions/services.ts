import {Dispatch} from "redux"
import {servicesAPI} from "../../api";
import {ServicesActions, ServicesActionTypes} from "../types/services";
import IService from "../../types/interfaces/IService";
import {ModesServicesPage} from "../../types/enums/ModesServicesPage";

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
      dispatch({type: ServicesActionTypes.ADD_NEW_SERVICE})
      const response = servicesAPI.createService(service)
      setTimeout(() => {
        if (!(response instanceof Error)) {
          dispatch({type: ServicesActionTypes.ADD_NEW_SERVICE_SUCCESS, payload: response})
        }
      }, 1000)
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: ServicesActionTypes.ADD_NEW_SERVICE_ERROR,
          payload: e.message
        })
      }
    }
  }
}
export const deleteService = (id: number) => {
  return async (dispatch: Dispatch<ServicesActions>) => {
    try {
      await servicesAPI.deleteService(id)
      dispatch({type: ServicesActionTypes.DELETE_SERVICE, payload: id})

    } catch (e) {
      if (e instanceof Error) {

      }
    }
  }
}
export const updateService = (service: IService) => {
  return async (dispatch: Dispatch<ServicesActions>) => {
    try {
      dispatch({type: ServicesActionTypes.ADD_NEW_SERVICE})

      let response = await servicesAPI.updateService(service)
      setTimeout(async () => {
        if (!(response instanceof Error)) {
          dispatch({type: ServicesActionTypes.UPDATE_SERVICE, payload: response})
        }
      }, 500)
    } catch (e) {
      if (e instanceof Error) {
        dispatch({
          type: ServicesActionTypes.ADD_NEW_SERVICE_ERROR,
          payload: e.message
        })
      }
    }
  }
}
export const handleAvailabilityService = (id: number) => {
  return async (dispatch: Dispatch<ServicesActions>) => {
    try {
      await servicesAPI.handleAvailabilityService(id)
      dispatch({type: ServicesActionTypes.HANDLE_AVAILABILITY_SERVICE, payload: id})
    } catch (e) {
      if (e instanceof Error) {

      }
    }
  }
}

export const setActiveService = (service: IService | undefined) => {
  return async (dispatch: Dispatch<ServicesActions>) => {
    dispatch({type: ServicesActionTypes.SET_ACTIVE_SERVICE, payload: service})
  }
}

export const setModeServicePage = (mode: ModesServicesPage) => {
  return async (dispatch: Dispatch<ServicesActions>) => {
    dispatch({type: ServicesActionTypes.SET_MODE_SERVICE_PAGE, payload: mode})
  }
}


