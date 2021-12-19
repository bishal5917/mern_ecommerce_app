import { loginStart, loginSuccess, loginFailure } from "./ReduxUser"
import { sellerloginStart, sellerloginSuccess, sellerloginFailure } from './ReduxSeller'
import axios from 'axios'

export const loginUser = async (dispatch, user) => {

    dispatch(loginStart())
    try {
        const res = await axios.post('/users/login', user)
        dispatch(loginSuccess(res.data))
        localStorage.setItem("user", JSON.stringify(res.data))

    } catch (error) {
        dispatch(loginFailure())
    }
}

export const loginSeller = async (dispatch, seller) => {

    dispatch(sellerloginStart())
    try {
        const res = await axios.post('/sellers/login', seller)
        dispatch(sellerloginSuccess(res.data))
        localStorage.setItem("seller", JSON.stringify(res.data))

    } catch (error) {
        dispatch(sellerloginFailure())
    }
}