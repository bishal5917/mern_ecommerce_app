import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
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

    const finalPrice = totalPrice + deliveryCharge

    //checking for user
    const user = useSelector(state => state.user.curruser)

    //getting cart
    const cart = useSelector(state => state.cart)

    //getting shippingAddress
    const address = useSelector(state => state.cart.shippingAddress)
    console.log(address.name, address.city)

    const placeOrderHandler = async () => {
        // dispatch(orderCreateReducer({orderItems:cart.cartItems}))
        //can be done with redux too !!!
        try {
            await axios.post('/orders/create', {
                userId: user._id,
                orderItems: cart.cartItems,
                shippingAddress: {
                    "name": address.name,
                    "country": address.country,
                    "city": address.city,
                    "province": address.province,
                    "code": address.code,
                    "street": address.street
                },
                deliveryCharge,
                totalPrice
            }, {
                headers: {
                    token: `Bearer ${user.token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
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
                                <span className="spans">
                                    {address.country},{address.city},{address.province},{address.code},{address.street}
                                </span>
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
                                <span className="spanTotal">${finalPrice}</span>
                            </div>
                        </div>
                        <Link className='link' to={`/orders/${user._id}`}>
                            <button onClick={placeOrderHandler}
                                className="checkOutButton">Place Order</button>
                        </Link>
                    </div>
                }
            </div>
        </>
    );
}

export default Order;
