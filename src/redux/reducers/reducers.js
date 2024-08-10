import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { modalReducer } from './modalReducer'

export const reducers = combineReducers({
  cartReducer,
  modalReducer,
})
