import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import Slider from "react-slick";


function Hero() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1
      };
    return (
        <div className='hero'>

            <div className='head'>
                <h1>Find Your Destination</h1>
                <h2>Top Visited Locations in Morocco</h2>   
            </div>            

        <Slider {...settings} className='block'>
          <div>
            <img className='img_car' src='https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div> 
        </Slider>  
        </div>
    )
}

export default Hero
