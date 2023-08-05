import React from 'react';
import Find from '../../../../components/CafDestinations/FindCaf';
import Navbar from '../../../../components/navbar/Navbaryy';
import CafRecommend from '../../../../components/CafRecommend';
import Counter from '../../../../components/counter/Counter';
import './cafres.scss';
import HeroDes from '../../../../components/heroDes/HeroDes';
import FilterCafe from '../../../../components/FilterCafe';
import FooterBanner from '../../../../components/footbanner/FooterBanner';
import Foot from '../../../../components/foot/Footer';

const CafRes = () => {
  return (
    <div className="cafres">
      <Navbar />
      <HeroDes
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        city="Cafes & Restau"
      />

      <Find
        title="Cafe & Restaurant Destinations in Morocco"
        subtitle="Discover Cafes and Restaurants in many cities"
      />
      <Counter />
      <CafRecommend />

      <FooterBanner />
      <Foot />
    </div>
  );
};

export default CafRes;
