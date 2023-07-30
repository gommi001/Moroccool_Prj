import React from 'react';
import HeroDes from '../../../../components/heroDes/HeroDes';
import Navbar from '../../../../components/navbar/Navbaryy';
import FilterCafe from '../../../../components/FilterCafe';
import FooterBanner from '../../../../components/footbanner/FooterBanner';
import Foot from '../../../../components/foot/Footer';

const Meknes = () => {
  return (
    <div className="meknes">
      <Navbar />
      <HeroDes
        image="https://images.pexels.com/photos/6621125/pexels-photo-6621125.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Hotels and Riads in Marrakech"
        arcity="مراكش"
      />
    </div>
  );
};

export default Meknes;
