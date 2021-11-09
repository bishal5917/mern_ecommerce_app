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
                </div>
                <div className="topics">
                    <div className="item">
                        <img src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                        <span className="name">Acer Nitro 5 2021 Intel i7 11Th Gen / RTX 3060 / 8GB RAM / 512 SSD / 15.6" FHD 144Hz display</span>
                    </div>
                    <span className="priceItem">QTY : 1 </span>
                    <span className="qty">Delivered</span>
                </div>
            </div>
        </>
    )
}
