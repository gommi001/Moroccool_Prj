import React from 'react';
import Footer from '../../../../components/footer/Footer';
import FindHot from '../../../../components/mainHotels/HotelsDestinations/FindHot';
import FindTypes from '../../../../components/mainHotels/hoteltypes/FindTypes';
import Navbar from '../../../../components/navbar/Navbaryy';
import './hotels.scss';
import HotRecommend from '../../../../components/HotRecommend';
import Counter from '../../../../components/counter/Counter';
import HeroHot from '../../../../components/mainHotels/herohot/HeroHot';

const Hotels = () => {
  return (
    <div className="hotels">
      <Navbar />
      <HeroHot />
      <FindHot />
      <FindTypes />
      <Counter />
      <HotRecommend />
      <Footer />
    </div>
  );
};

export default Hotels;
