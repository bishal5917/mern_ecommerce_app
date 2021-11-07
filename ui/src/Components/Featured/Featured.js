import React from 'react'
import FItems from '../FItems/FItems'
import './featured.css'

export default function Featured() {
    return (
        <>
        <div className="featuredContainer">
            <span className="topic">
                FEATURED PRODUCTS
            </span>
            <div className="items">
             <div><FItems/></div>
             <div><FItems/></div>
             <div><FItems/></div>
             <div><FItems/></div>
             <div><FItems/></div>
             <div><FItems/></div>
             <div><FItems/></div>
             <div><FItems/></div>
            </div>
        </div>
        </>
    )
}
