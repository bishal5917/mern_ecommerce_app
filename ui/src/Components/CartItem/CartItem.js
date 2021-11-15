import React from 'react'
import './cartItem.css'
import { removeCart } from '../../Redux/ReduxCart'
import { useDispatch } from 'react-redux'

export default function CartItem({ cartProduct }) {
    const dispatch=useDispatch()
    //removing cart
    const removeCartHandle = () => {
        dispatch(removeCart,({cartProduct}));
    }
    return (
        <>
            <div className="cartItemCont">
                <div className="topics">
                    <span className="item">Item</span>
                    <span className="priceItem">Price</span>
                    <span className="qty">QTY</span>
                    <span className="total">SubTotal</span>
                </div>
                <div className="topics">
                    <div className="item">
                        <img src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                        <span className="name">{cartProduct.name}</span>
                    </div>
                    <span className="priceItem">{cartProduct.price}</span>
                    <span className="qty">{cartProduct.quantity}</span>
                    <span className="total">{cartProduct.total}</span>
                </div>
                <button onClick={removeCartHandle}>Remove Item</button>
            </div>
        </>
    )
}
