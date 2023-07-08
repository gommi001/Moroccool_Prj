import React, {useState} from 'react'
import Slider from "react-slick";
import './slick.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Slick = () => {

  var settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
    autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='app'>
      <Slider {...settings}>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/made-in-urban-maes-7liwa-1.png?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/gims-friends-2.jpeg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/made-in-urban-maes-7liwa-1.png?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/made-in-urban-maes-7liwa-1.png?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/made-in-urban-maes-7liwa-1.png?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/made-in-urban-maes-7liwa-1.png?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/made-in-urban-maes-7liwa-1.png?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
        <div>
          <img alt='' className='sl_img' src='https://gcdn.imgix.net/events/made-in-urban-maes-7liwa-1.png?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' />
          
        </div>
      </Slider>
    </div>
  );
}


   


export default Slick