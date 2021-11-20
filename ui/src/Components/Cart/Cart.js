import React from 'react'
import './cart.css'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Cart() {
    //selecting the cart 
    const itemsInCart = useSelector(state => state.cart.cartItems)
    const totalItems = useSelector(state => state.cart.cartItems.length)
    //total price
    const totalPrice = itemsInCart.reduce((a, c) => a + c.price * c.quantity, 0)
    //c goes for every values in that array c=currentItem
    //and 0 means default value of a=0 
    const deliveryCharge = 2

    //checking for user
    const user = useSelector(state => state.user.curruser)
    return (
        <>
            <div className='mainCont'>
                <div className="shoppingCartContainer">
                    {totalItems === 0 ? (<span className="topic">Your shopping cart is empty</span>) :
                        <span className="xtopic">Shopping Cart</span>}
                    <div className="carts">
                        {itemsInCart.map((p) => (
                            <CartItem cartProduct={p} />
                        ))}
                    </div>
                </div>
                {totalItems > 0 &&
                    <div className='orderCont'>
                        <span className="xtopic">Order Summary</span>
                        <div className="fieldDetails">
                            <div className="ItemsName">
                                <span className="spans">Total</span>
                                <span className="spans">Delivery Charge</span>
                                <span className="spanTotal">SubTotal</span>
                            </div>
                            <div className="ItemsValue">
                                <span className="spans">${totalPrice}</span>
                                <span className="spans">${deliveryCharge}</span>
                                <span className="spanTotal">${totalPrice + deliveryCharge}</span>
                            </div>
                        </div>
                        {
                            user ? (<Link className='link' to="/shippinginfo">
                                <div>
                                    <button className="checkOutButton">Checkout</button>
                                </div>
                            </Link>) : (<Link className='link' to="/login">
                                <div>
                                    <button className="checkOutButton">Checkout</button>
                                </div>
                            </Link>)
                        }

                    </div>
                }
            </div>

        </>
    )
}
