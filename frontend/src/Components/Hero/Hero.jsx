import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/bg.png'

const Hero = ()=>{
    return (
        <div className="hero">
             <img src={hero_image} alt="" />
        </div>
    )
}

export default Hero