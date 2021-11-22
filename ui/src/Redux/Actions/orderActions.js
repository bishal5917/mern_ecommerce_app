import axios from 'axios'
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from '../Constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order })
    try {
        const loggeduser=getState().user.curruser
        const { data } = await axios.post('/orders/create', order, {
            headers: {
                token: `Bearer ${loggeduser.token}`
            }
        })
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL, payload: error.message })
    }
}