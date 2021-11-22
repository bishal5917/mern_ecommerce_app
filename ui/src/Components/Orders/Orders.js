import React, { useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import SingleOrder from '../SingleOrder/SingleOrder'
import axios from 'axios'
import './Orders.css'

export default function Orders() {

   const user=useSelector(state=>state.user.curruser)

  const [ordersFound, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(`/orders/getorders/${user._id}`)
        setOrders(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrders();
  });

  return (
    <>
      <div className="shoppingCartContainer">
        <span className="xtopic">My Orders</span>
        <div className="carts">
          {ordersFound.map((p) => (
            <SingleOrder ordered={p} />
          ))}
        </div>
      </div>
    </>
  )
}
