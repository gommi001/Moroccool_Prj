  // MuseumSlider.jsx

  import React from 'react';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';

  import './museumSlider.scss';

  const MuseumSlider = ({ images, onImageClick }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="museum-slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => {
              console.log('Image clicked!', images, index);
              onImageClick(index); // Pass only the index here
            }}>
              <img className='museum_img' src={image} alt={`Museum Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default MuseumSlider;

 
