import React from 'react'
import SingleOrder from '../SingleOrder/SingleOrder'
import './Orders.css'

export default function Orders() {
    return (
      <>
              <div className="shoppingCartContainer">
                <span className="xtopic">My Orders</span>
                <div className="carts">
                    <SingleOrder />
                    <SingleOrder />
                    <SingleOrder />
                </div>
            </div>
      </>
    )
}
