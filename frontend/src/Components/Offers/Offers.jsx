import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = ()=>{
    return (
        <div className='offers'> 
            <div className="offers-left">
                
                <p>Aproveite 10% de desconto na sua primeira compra</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers