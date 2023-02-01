import { combineReducers } from 'redux'
import { ServiceReducer } from './servicesReducer'

export const rootReducer = combineReducers({
  services: ServiceReducer
})