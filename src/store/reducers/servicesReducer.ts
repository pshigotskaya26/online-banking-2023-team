import {ServicesActions, ServicesActionTypes, ServicesState} from "../types/services"
import {ModesServicesPage} from "../../types/enums/ModesServicesPage";

const initialState: ServicesState = {
  loadingServices: false,
  services: [],
  activeService: undefined,
  mode: ModesServicesPage.list,
  errorLoadingServices: "",
  loadingCreateService: false,
  errorAddNewService: "",
}

export const ServicesReducer = (state = initialState, action: ServicesActions): ServicesState => {
  switch (action.type) {
    case ServicesActionTypes.FETCH_SERVICES:
      return {...state, loadingServices: true}
    case ServicesActionTypes.FETCH_SERVICES_SUCCESS:
      return {...state, loadingServices: false, services: action.payload, errorAddNewService: ""}
    case ServicesActionTypes.FETCH_SERVICES_ERROR:
      return {...state, loadingServices: false, errorLoadingServices: action.payload}
    case ServicesActionTypes.ADD_NEW_SERVICE:
      return {...state, loadingCreateService: true, errorAddNewService: ""}
    case ServicesActionTypes.ADD_NEW_SERVICE_SUCCESS:
      return {
        ...state,
        services: [...state.services, action.payload],
        mode: ModesServicesPage.infoService,
        loadingCreateService: false,
        activeService: action.payload
      }
    case ServicesActionTypes.ADD_NEW_SERVICE_ERROR:
      return {...state, errorAddNewService: action.payload, loadingCreateService: false}
    case ServicesActionTypes.DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter(el => el.id !== action.payload),
        mode: ModesServicesPage.list,
        activeService: undefined
      }
    case ServicesActionTypes.UPDATE_SERVICE:
      return {
        ...state,
        services: state.services.map(el => el.id === action.payload.id ? action.payload : el),
        mode: ModesServicesPage.infoService,
        loadingCreateService: false,
        activeService: action.payload
      }
    case ServicesActionTypes.HANDLE_AVAILABILITY_SERVICE:
      const newServices = state.services.map(el => el.id === action.payload
        ? {...el, isAvailable: !el.isAvailable}
        : el)
      return {
        ...state,
        services: newServices,
        activeService: newServices.filter(service => service.id === action.payload)[0]
      }
    case ServicesActionTypes.SET_ACTIVE_SERVICE:
      return {...state, activeService: action.payload, errorAddNewService: ""}
    case ServicesActionTypes.SET_MODE_SERVICE_PAGE:
      return {...state, mode: action.payload}
    default:
      return state
  }
}