import React from 'react'
import './cart.css'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
    //selecting the cart 
    const cart = useSelector(state => state.cart)
    return (
        <>
            <div className="shoppingCartContainer">
                <span className="xtopic">Shopping Cart</span>
                <div className="carts">
                    {cart.products.map((p) => (
                        <CartItem cartProduct={p}/>
                    ))}

                </div>
            </div>
        </>
    )
}
