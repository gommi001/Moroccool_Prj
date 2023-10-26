import React from 'react';
import './transport.scss'
import Navbar from '../../../components/navbar/Navbar';
import HeroDes from '../../../components/heroDes/HeroDes'
import News from '../../../components/news/News'
import Hero from '../../../components/hero/Hero'
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"


const Transport = () => {
  return (
    <div class="hero">
      <Navbar/>
      <Hero
        img="https://english.visitkorea.or.kr/static/front/images/subMain/subMain_visual_trnasportation.png"
        title="Transport" 
        subtitle="Discover Shop Moroccan Treasures"  
      />

      <News/>
           
      <FooterBanner/>
      <Foot/>

    </div>
  );
};

export default Transport;
