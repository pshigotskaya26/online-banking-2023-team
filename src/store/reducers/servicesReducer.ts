import {ServicesActions, ServicesActionTypes, ServicesState} from "../types/services"

const initialState: ServicesState = {
  loadingServices: false,
  services: [],
  errorLoadingServices: "",
  errorAddNewService: "",
}

export const ServicesReducer = (state = initialState, action: ServicesActions): ServicesState => {
  switch (action.type) {
    case ServicesActionTypes.FETCH_SERVICES:
      return {...state, loadingServices: true}
    case ServicesActionTypes.FETCH_SERVICES_SUCCESS:
      return {...state, loadingServices: false, services: action.payload}
    case ServicesActionTypes.FETCH_SERVICES_ERROR:
      return {...state, loadingServices: false, errorLoadingServices: action.payload}
    case ServicesActionTypes.ADD_NEW_SERVICE_ERROR:
      return {...state, errorAddNewService: action.payload}
    default:
      return state
  }
}