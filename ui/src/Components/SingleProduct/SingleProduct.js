import React, { useState, useEffect } from 'react'
import './sp.css'
import { useLocation } from 'react-router'
import axios from 'axios'

export default function SingleProduct() {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]

    //fetching a single prod
    const [prod, setProd] = useState("")
    useEffect(() => {
        const findingProdById = async () => {
            try {
                const response = await axios.get('/products/' + productId)
                setProd(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        findingProdById();

    },[productId]);

    //for quantity
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
                      {prod.name}
                    </p>
                    <span className="price">
                     {prod.price}
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
                                {prod.cpu}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Operating System</span>
                            <p className="desc">
                                {prod.operatingSystem}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">display</span>
                            <p className="desc">
                                {prod.display}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">RAM</span>
                            <p className="desc">
                              {prod.ram}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Storage</span>
                            <p className="desc">

                                {prod.storage}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Graphics</span>
                            <p className="desc">
                               {prod.graphics}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Battery</span>
                            <p className="desc">
                                {prod.battery}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
