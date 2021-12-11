import React, { useState, useEffect } from 'react'
import './slider.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from 'styled-components'

const SliderDiv = styled.div`

display: flex;
transition:0.5s ease-out;
transform:translateX(${props => props.slideby * -100}vw)

`

export default function Slider() {
    const [slideby, setSlideBy] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setSlideBy(slideby < 2 ? slideby + 1 : 0)
        }, 5000);
    }, [slideby]);

    const handleClick = (slideDirection) => {
        if (slideDirection === "left") {
            setSlideBy(slideby > 0 ? slideby - 1 : 2)
        }
        else {
            setSlideBy(slideby < 2 ? slideby + 1 : 0)
        }
    }
    return (
        <>
            <div className="sliderImages">
                <SliderDiv slideby={slideby}>
                    <img className='sliderImage'
                        src="slider1.jpg" alt="" srcset="" />
                    <img className='sliderImage'
                        src="slider2.jpg" alt="" srcset="" />
                    <img className='sliderImage'
                        src="slider3.jpg" alt="" srcset="" />
                </SliderDiv>
                <ChevronLeftIcon onClick={() => handleClick("left")} style={{ "fontSize": "40" }}
                    className="left" />
                <ChevronRightIcon onClick={() => handleClick("right")} style={{ "fontSize": "40" }}
                    className="right" />
            </div>
        </>
    )
}
