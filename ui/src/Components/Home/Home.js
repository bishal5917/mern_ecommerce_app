import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import Featured from '../Featured/Featured'
import ListIcon from '@mui/icons-material/List';
import './home.css'

export default function Home() {
  const [category, setCategory] = useState("")
  const handleCatsChange = (e) => {
    setCategory(e.target.value)
  }
  return (
    <>
      <div className="selectCat">
        <ListIcon style={{ "fontSize": "30"}} />
        <select onChange={handleCatsChange} name="cats" className='catsx'>
          <option value=""> Shop By Category</option>
          <option value="laptop">LAPTOPS</option>
          <option value="gaming laptop">GAMING LAPTOPS</option>
          <option value="monitor">MONITORS</option>
          <option value="storage">STORAGE</option>
          <option value="cpu">CPU</option>
          <option value="graphic card">GRAPHIC CARDS</option>
        </select>
      </div>
      {!category && <Slider />}
      <Featured category={category} />
    </>
  )
}
