import React from 'react'
import './SO.css'

export default function SingleOrder({ordered}) {
    return (
        <>
            <div className="cartItemCont">
                <div className="xtopics">
                    <div className="orderAndId">
                        <span className="order">Order</span>
                        <span className="orderId">#{ordered._id}</span>
                    </div>
                    <div className="Placed">
                        Placed on {ordered.createdAt.toString()}
                    </div>
                    <div className="statusShow">
                        Status : {ordered.isdelivered?`Delivered`:`Pending`}
                    </div>
                </div>

                <div className="orderOptions">
                    <button className="removeBtn">Pay</button>
                    <button className="removeBtn">Cancel Order</button>
                </div>

            </div>
        </>
    )
}
