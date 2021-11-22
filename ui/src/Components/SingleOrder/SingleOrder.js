import React from 'react'
import './SO.css'

export default function SingleOrder() {
    return (
        <>
            <div className="cartItemCont">
                <div className="xtopics">
                    <div className="orderAndId">
                        <span className="order">Order</span>
                        <span className="orderId">#202670200188400</span>
                    </div>
                    <div className="Placed">
                        Placed on 31 Aug 2021 06:48:03
                    </div>
                    <div className="statusShow">
                        Status : Pending
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
