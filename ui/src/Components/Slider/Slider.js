import React, { useState } from 'react'
import './slider.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Slider() {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    const leftTransform = () => {
        setLeft(-1)
    }

    const rightTransform = () => {

    }
    return (
        <>
            <div className="sliderImages">
                <ChevronLeftIcon onClick={leftTransform} style={{ "fontSize": "40" }}
                    className="left" />
                <ChevronRightIcon onClick={rightTransform} style={{ "fontSize": "40" }}
                    className="right" />
                <div className="sliderImgs">
                    <img className='sliderImage'
                        src="slider1.jpg" alt="" srcset="" />
                    <img className='sliderImage'
                        src="slider2.jpg" alt="" srcset="" />
                    <img className='sliderImage'
                        src="slider3.jpg" alt="" srcset="" />
                </div>
            </div>
        </>
    )
}
