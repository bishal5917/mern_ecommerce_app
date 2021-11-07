import React from 'react'
import './cartItem.css'

export default function CartItem() {
    return (
        <>
            <div className="cartItemCont">
                <div className="topics">
                    <span className="item">Item</span>
                    <span className="priceItem">Price</span>
                    <span className="qty">QTY</span>
                    <span className="total">SubTotal</span>
                </div>
                <div className="topics">
                    <div className="item">
                        <img src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                        <span className="name">	MSI GP66 LEOPARD 10UE I7 10TH GEN 8-CORE / RTX 3060 / 1TB SSD / 16GB RAM / 15.6" 144HZ FHD DISPLAY</span>
                    </div>
                    <span className="priceItem">$1000</span>
                    <span className="qty">1</span>
                    <span className="total">$1000</span>
                </div>
                <button>Remove Item</button>
            </div>
        </>
    )
}
