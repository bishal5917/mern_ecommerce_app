import React from 'react'
import './cart.css'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
    //selecting the cart 
    const itemsInCart = useSelector(state => state.cart.cartItems)
    const totalItems = useSelector(state => state.cart.cartItems.length)
    return (
        <>
            <div className="shoppingCartContainer">
                <span className="xtopic">Shopping Cart</span>
                <div className="carts">
                    {itemsInCart.map((p) => (
                        <CartItem cartProduct={p} />
                    ))}
                </div>
                {totalItems > 0 &&
                    <div className="PlaceOrderbutton">Place Order</div>
                }
            </div>
        </>
    )
}
