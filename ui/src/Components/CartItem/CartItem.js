import React from 'react'
import './cartItem.css'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../Redux/Actions/cartActions'

export default function CartItem({ cartProduct }) {
    const dispatch = useDispatch()

    const removeCartHandler=()=>{
        dispatch(removeFromCart(cartProduct.name))
    }

    return (
        <>
            <div className="cartItemCont">
                <div className="topics">
                    <span className="item">Item</span>
                    <span className="priceItem">Price</span>
                    <span className="qty">QTY</span>
                    <span className="total">Total</span>
                </div>
                <div className="topics">
                    <div className="item">
                        <img src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                        <span className="name">{cartProduct.name}</span>
                    </div>
                    <span className="priceItem">$ {cartProduct.price}</span>
                    <span className="qty">{cartProduct.quantity}</span>
                    <span className="total">$ {cartProduct.quantity*cartProduct.price}</span>
                </div>
                <button onClick={removeCartHandler}>Remove Item</button>
            </div>
        </>
    )
}
