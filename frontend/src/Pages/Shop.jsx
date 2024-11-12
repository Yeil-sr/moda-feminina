import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';


const Shop = ()=>{
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
        </div>
    )
}

export default Shop