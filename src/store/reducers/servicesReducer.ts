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
    case ServicesActionTypes.DELETE_SERVICE:
      return {...state, services: state.services.filter(el => el.id !== action.payload)}
    case ServicesActionTypes.UPDATE_SERVICE:
      return {...state, services: state.services.map(el => el.id === action.payload.id ? action.payload : el)}
    case ServicesActionTypes.HANDLE_AVAILABILITY_SERVICE:
      const newServices = state.services.map(el => el.id === action.payload ? {...el, isAvailable: !el.isAvailable} : el)
      return {...state, services: newServices}
    default:
      return state
  }
}