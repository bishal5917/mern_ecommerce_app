import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FItems from '../FItems/FItems'
import './featured.css'

export default function Featured() {
    //states for products
    const [products, setProducts] = useState([])

    //lets fetch all the products
    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await axios.get('/products/getallprods')
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProds()
    }, []);
    return (
        <>
            <div className="featuredContainer">
                <span className="topic">
                    FEATURED PRODUCTS
                </span>
                <div className="items">
                    {products.map((p) => (
                        <div><FItems prods={p} /></div>
                    ))}
                </div>
            </div>
        </>
    )
}
