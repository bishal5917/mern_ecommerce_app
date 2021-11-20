import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './order.css'

const Order = () => {
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
                    <span className="spanTotal">Shipping</span>
                    <div className="shipDetails">
                        <div className="ItemsName">
                            <div className="namePart">
                                <span className="spanTitle">Name : </span>
                                <span className="spans">{user.name}</span>
                            </div>
                            <div className="namePart">
                                <span className="spanTitle">Address : </span>
                                <span className="spans">Nepal</span>
                            </div>
                        </div>
                    </div>
                    <span className="spanTotal">Payment</span>
                    <div className="shipDetails">
                        <div className="ItemsName">
                            <div className="namePart">
                                <span className="spanTitle">Method : </span>
                                <span className="spans">Paypal</span>
                            </div>
                        </div>
                    </div>
                </div>
                {totalItems > 0 &&
                    <div className='orderCont'>
                        <span className="xtopic">Order Summary</span>
                        <div className="fieldDetails">
                            <div className="ItemsName">
                                <span className="spans">Items</span>
                                <span className="spans">Total</span>
                                <span className="spans">Delivery Charge</span>
                                <span className="spanTotal">SubTotal</span>
                            </div>
                            <div className="ItemsValue">
                                <span className="spans">{totalItems}</span>
                                <span className="spans">${totalPrice}</span>
                                <span className="spans">${deliveryCharge}</span>
                                <span className="spanTotal">${totalPrice + deliveryCharge}</span>
                            </div>
                        </div>
                        <Link className='link' to=''>
                            <button className="checkOutButton">Place Order</button>
                        </Link>
                    </div>
                }
            </div>

        </>
    );
}

export default Order;
