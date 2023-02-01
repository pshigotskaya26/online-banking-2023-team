import { combineReducers } from 'redux'
import { ServicesReducer } from './servicesReducer'

export const rootReducer = combineReducers({
  services: ServicesReducer
})