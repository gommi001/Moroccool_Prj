import React from 'react';
import styles from './Find.module.css';
import Card from './Card';
import useFetch from '../../../hooks/useFetch';
import { CircularProgress } from '@mui/material';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const HotelTypes = () => {

  const {data, loading, error, reFetch}=useFetch("/hotels/countByType");
  const images = [
    'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1544665558-ee82fa2c0c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmlhZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGFzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90ZWwlMjBpbmRvb3J8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1664261421791-c25c5760f577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYXJ0ZW1lbnQlMjBpbmRvb3J8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1607582544644-f1da2a004994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGlueSUyMGhvdXNlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'

  ]


  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <div className={styles.text_bg}>
          <p>
            Discover by Property Types
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
          {loading ?
          (<CircularProgress color="inherit" />) : (
          <>

          {data && images.map((img,i)=>(

          <SwiperSlide>
            <div className={styles.card} key={i}>
              <img src={img} alt='/' />
              <p>{data[i]?.type}</p>
              <h7>{data[i]?.count} {data[i]?.type}</h7>
            </div>
          </SwiperSlide>
          ))}
          
          </>)}

        </Swiper>
      </div>
    </div>
  );
};

export default HotelTypes;
