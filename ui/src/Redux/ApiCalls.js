import { loginStart,loginSuccess,loginFailure } from "./ReduxUser"
import axios from 'axios'

export const loginUser=async(dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res=await axios.post('/users/login',user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
