import {ServicesActions, ServicesActionTypes, ServicesState} from "../types/services"

const initialState: ServicesState = {
  services: [],
}

export const ServiceReducer = (state = initialState, action: ServicesActions): ServicesState => {
  switch (action.type) {
    case ServicesActionTypes.FETCH_SERVICES:
      return {
        ...state,
        services: action.payload
      }
    default:
      return state
  }
}