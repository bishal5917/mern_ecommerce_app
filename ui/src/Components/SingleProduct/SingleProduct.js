import React, { useState, useEffect } from 'react'
import './sp.css'
import { useLocation } from 'react-router'
import axios from 'axios'
import  {useDispatch}  from 'react-redux'
import { addToCart } from '../../Redux/Actions/cartActions'
import Reviews from '../Reviews/Reviews'

export default function SingleProduct() {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]

    //fetching a single prod
    const [product, setProd] = useState("")
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

    }, [productId]);

    //for quantity
    const [quantity, setquantity] = useState(1)

    const incquantity = () => {
        setquantity(quantity + 1)
    }

    const decquantity = () => {
        quantity === 1 ? setquantity(quantity) : setquantity(quantity - 1)
    }

    //add to cart 
    const dispatch = useDispatch();
    const addToCartHandle = () => {
        dispatch(addToCart(productId,quantity))
    }
    return (
        <>
            <div className="spCont">
                <div className="imageContainer">
                    <img className="imgg" src="https://zozohub.com/cache/medium/product/543/sXLWCtRVxBwx4ZE1zDmX7xYPTeenePdXtaoluXQO.jpeg" alt="" srcset="" />
                </div>
                <div className="other">
                    <p className="xtitle">
                        {product.name}
                    </p>
                    <span className="price">
                        ${product.price}
                    </span>
                    <button onClick={addToCartHandle} className='cartBtn'>
                        <span >ADD TO CART</span>
                    </button>
                    <hr />
                    <div className="quantity">
                        <span className="text">Quantity</span>
                        <div className="qs">
                            <span onClick={decquantity} className="manipulators">-</span>
                            <span className="manipulators">{quantity}</span>
                            <span onClick={incquantity} className="manipulators">+</span>
                        </div>
                    </div>
                    <hr />
                    <div className="details">
                        <h2 className="title">Details</h2>
                        <hr />
                        <div className="firstDetails">
                            <span className="dtitle">CPU</span>
                            <p className="desc">
                                {product.cpu}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Operating System</span>
                            <p className="desc">
                                {product.operatingSystem}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">display</span>
                            <p className="desc">
                                {product.display}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">RAM</span>
                            <p className="desc">
                                {product.ram}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Storage</span>
                            <p className="desc">

                                {product.storage}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Graphics</span>
                            <p className="desc">
                                {product.graphics}
                            </p>
                        </div>
                        <div className="firstDetails">
                            <span className="dtitle">Battery</span>
                            <p className="desc">
                                {product.battery}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Reviews />
        </>
    )
}
