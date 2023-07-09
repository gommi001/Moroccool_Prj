import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const Find = (props) => {

  //const {data, loading, error, reFetch}=useFetch("/cafes/countByCity?cities=casablanca,meknes,fes,rabat,marrakech,essaouira,tanger,agadir");
  
  
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>
          Discover Events in many cities
        </h1>
        <div className={styles.text_bg}>
          <p>
            Scroll choose your city and enjoy
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          
          <SwiperSlide>
            <Link to='/events/eventcasablanca' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYWJsYW5jYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Casablanca'
              desc='10 events'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/events/eventmeknes' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1628474754745-7c89f629cba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVrbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Meknes'
              desc='4 events'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/events/eventfes' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1553898439-93ac04cfe972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Fes'
              desc='20 events'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/events/eventrabat' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1530524860884-57eb29dac21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhYmF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Rabat'
              desc='15 events'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/events/eventmarrakech' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1561642769-1bca263542e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFycmFrZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Marrakech'
              desc='10 events'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/events/eventessaouira' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXNzYW91aXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Essaouira'
              desc='25 events'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/events/event' style={{color:'#000'}}>           
            <Card
              image='https://images.unsplash.com/photo-1533501747004-381b96042e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRhbmdpZXIlMjBtb3JvY2NvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Tangier'
              desc='not available'
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1562874732-260714dfe537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFnYWRpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Agadir'
              desc='not available'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1614690797360-bf8dccae8aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGFsJTIwaG9jZWltYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Houceima'
              desc='4 events'
            />
          </SwiperSlide> 

        
         
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
