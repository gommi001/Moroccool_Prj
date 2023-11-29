import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './hello.css';
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';
import hero4 from '../../assets/images/hero4.png';
import hero5 from '../../assets/images/hero5.png';

const HelloHero = () => {
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef(null);

  const images = [
    { src: hero1, title: 'Perle De Souss', subtitle: `Agadir est une ville majeure du Maroc, située sur la côte sud de l'Atlantique. La ville est connue pour ses belles plages, ses équipements modernes,` },
    { src: hero2, title: 'Ville Bleue', subtitle: `Chefchaouen, often referred to as the "Blue Pearl" or "Blue City," is a picturesque town nestled in the Rif Mountains of northern Morocco` },
    { src: hero3, title: `Atlas's Jewel`, subtitle: `Ifrane is a city located in the Middle Atlas region of Morocco. Often referred to as the "Switzerland of Morocco," Ifrane is known for its European-inspired architecture` },
    { src: hero4, title: 'Moroccan Sahara', subtitle: `The Moroccan Sahara, also known as the Western Sahara, is a vast desert region located in the southern part of Morocco.` },
    { src: hero5, title: 'Aït Benhaddou', subtitle: `Aït Benhaddou is a historic fortified village situated along the former caravan route between the Sahara and Marrakech. Recognized as a UNESCO World Heritage Site,` },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
  };

  const handlePlayPause = () => setAutoplay(!autoplay);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="hero">
      <Slider {...settings} className="slider-japan" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className={`hero-slide ${index === 0 ? 'active' : ''}`}>
            <img
              className="hero_image"
              src={image.src}
              alt="Moroccool Cities"
            />
            <div className="hero-text">
              <h1 className="hero-title">{image.title}</h1>
              <h3 style={{color: '#EEBA2B'}}>{image.subtitle}</h3>
            </div>
          </div>
        ))}
      </Slider>
      <div className="hero-controls-wrapper">
        <button className="btn-hero btn-prev" onClick={handlePrev}>
          <NavigateBeforeIcon />
        </button>
        <button className="btn-hero btn-play-pause" onClick={handlePlayPause}>
          {autoplay ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button className="btn-hero btn-next" onClick={handleNext}>
          <NavigateNextIcon />
        </button>
      </div>
    </section>
  );
};

export default HelloHero;
