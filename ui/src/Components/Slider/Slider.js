import React from 'react'
import './slider.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Slider() {
    return (
        <>
            <div className="sliderImages">
                <ChevronLeftIcon style={{"fontSize":"40"}} 
                className="left"/>
                <ChevronRightIcon style={{"fontSize":"40"}}
                 className="right"/>
                <img className='sliderImage'
                    src="https://itti.com.np/pub/media/wysiwyg/itti_sliders/Acer-Predator-Triton-500-2020-final.jpg" alt="" srcset="" />
            </div>
        </>
    )
}
