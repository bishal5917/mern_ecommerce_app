import React, { useState } from 'react'
import './sp.css'

export default function SingleProduct() {
    const [qt, setQt] = useState(1)

    const incQt = () => {
        setQt(qt + 1)
    }

    const decQt = () => {
        qt === 1 ? setQt(qt) : setQt(qt - 1)
    }
    return (
        <>
            <div className="spCont">
                <div className="imageContainer">
                    <img className="imgg" src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                </div>
                <div className="other">
                    <p className="xtitle">
                        Acer Nitro 5 2021 (AN515-45) Gaming Laptop / Ryzen 5 5600H / RTX 3060 / 8GB RAM / 512GB SSD / 15.6" FHD 144Hz Display
                    </p>
                    <span className="price">
                        $ 1000
                    </span>
                    <button className='cartBtn'>
                        <span>ADD TO CART</span>
                    </button>
                    <hr />
                    <div className="quantity">
                        <span className="text">Quantity</span>
                        <div className="qs">
                            <span onClick={decQt} className="manipulators">-</span>
                            <span className="manipulators">{qt}</span>
                            <span onClick={incQt} className="manipulators">+</span>
                        </div>
                    </div>
                    <hr />
                    <div className="details">
                        <h2 className="title">Details</h2>
                        <hr />
                        <div className="firstDetails">
                            <span className="dtitle">CPU</span>
                            <p className="desc">
                                AMD Ryzen 5 5600H CPU (Cezanne)
                                - 3.3GHz Base Clock, 4.2GHz Max Boost Clock
                                - 16MB L3 Cache, 6 Cores, 12 Threads
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Operating System</span>
                            <p className="desc">
                                Windows 11
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">display</span>
                            <p className="desc">
                                15.6-inch (1920 x 1080 pixels) IPS panel
                                Full-HD resolution, 144Hz refresh rate
                                Acer ComfyView technology, Slim Bezel
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">RAM</span>
                            <p className="desc">
                                8GB DDR4 RAM (@3200MHz)
                                Up to 32GB RAM supported
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Storage</span>
                            <p className="desc">

                                512GB M.2 NVMe PCIe SSD
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Graphics</span>
                            <p className="desc">
                                NVIDIA GeForce RTX 3060 Discrete Graphics
                                - 6GB GDDR6 Video Memory (VRAM)
                                - Up to 85W maximum graphics power
                                - Up to 1425MHz GPU boost clock
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Battery</span>
                            <p className="desc">
                                57.5Wh 4-cell Li-Ion battery
                                180W AC power adapter
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
