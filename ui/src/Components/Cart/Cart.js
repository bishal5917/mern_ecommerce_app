import React from 'react'
import './cart.css'
import CartItem from '../CartItem/CartItem'

export default function Cart() {
    return (
        <>
            <div className="shoppingCartContainer">
                <span className="xtopic">Shopping Cart</span>
                <div className="carts">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    
                </div>
            </div>
        </>
    )
}
