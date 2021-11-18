import { createStore, combineReducers ,applyMiddleware , compose} from 'redux'
import userReducer from './ReduxUser'
import thunk from 'redux-thunk'
import { cartReducer } from './Reducers/cartReducers'

//initial state for cart
const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') ?
      JSON.parse(localStorage.getItem('cartItems')) : []
  },
  address: {
    address: localStorage.getItem('address') ?
      JSON.parse(localStorage.getItem('address')) : {}
  }
}

const reducer = combineReducers({ user: userReducer ,cart:cartReducer})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
