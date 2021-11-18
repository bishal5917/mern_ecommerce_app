import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Constants/cartConstants'

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
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(name)=>async(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:name
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    //This getState is used to get present redux state
    //from getstate we are updating the cart after removing item 

}