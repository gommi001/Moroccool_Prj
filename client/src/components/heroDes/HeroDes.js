import React from 'react'
import './HeroDesStyles.css'


function Hero (props) {

    return (
        <div className='heroDes' id='#'>
            <img className='hero_img' src={props.image}/>
            <div className='content'>
                <h2>{props.city}</h2>
            </div>
        </div>
    )
}

export default Hero
