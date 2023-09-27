import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

import { Link } from 'react-router-dom';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Activités</h1>
        <div className={styles.text_bg}>
          <p>
          Découvrez une multitude d'expériences lors de votre visite au Maroc
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
            <Link to='/things/hotels' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzJTIwbW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Hotels'
            />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to='/things/cafres' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Restaurants'
            />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to='/destination' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1598365198301-df3c18f3c930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzdGluYXRpb24lMjBtb3JvY2NvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Destinations'
            />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to='/things/cafres' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1595847675008-92fa0c8c68c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              make='Cafes'
            />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to='/events' style={{color:'#000'}}>
            <Card
              image='https://images.unsplash.com/photo-1492528086374-eebc6e3fa7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Events'
            />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnMlMjBtb3JvY2NvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Tours Programs'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1499062918700-389fa905494e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlyZSUyMHRyaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              make='Hire a Trip'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1628024963793-7823e403cf82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1eSUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Book a Car'
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1561642769-1bca263542e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFycmFrZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Most Visisted Places'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
