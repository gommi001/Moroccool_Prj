import React from 'react';
import Navbar from '../../../../components/navbar/Navbaryy';
import HeroDes from '../../../../components/heroDes/HeroDes';
import FilterCafe from '../../../../components/FilterCafe';
import FooterBanner from '../../../../components/footbanner/FooterBanner';
import Foot from '../../../../components/foot/Footer';

const Meknes = () => {
  return (
    <div className="meknes">
      <Navbar />
      <HeroDes
        image="https://images.pexels.com/photos/6662921/pexels-photo-6662921.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Hotels and Riads in Essaouira"
        arcity="الصويرة"
      />

      <FilterCafe />

      <FooterBanner />
      <Foot />
    </div>
  );
};

export default Meknes;
