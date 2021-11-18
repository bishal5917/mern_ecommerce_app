import axios from 'axios'
import { CART_ADD_ITEM } from '../Constants/cartConstants'

export const addToCart=(productId,quantity)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`/products/${productId}`);
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name:data.name,
            price:data.price,
            id:data._id,
            quantity
        }
    })
}