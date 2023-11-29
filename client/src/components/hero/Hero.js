import React from 'react'
import './HeroStyles.css'
import Slider from "react-slick";


function Hero(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
    return (
        <div className='hero'>
            <div className='head'>
            <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>   
            </div>            
        <Slider {...settings} className='block'>
          <div>
            <img className='img_car' src={props.img} alt='' />
          </div> 
           
        </Slider>  
        </div>
    )
}

export default Hero
