import React from 'react';
import HeroDes from '../components/heroDes/HeroDes';
import Navbar from '../components/navbar/Navbaryy';
import Description from '../components/DescMoroccool/Description';
import FooterBanner from '../components/footbanner/FooterBanner';
import Footer from '../components/foot/Footer';

function About() {
  return (
    <div>
      <Navbar />
      <HeroDes
        image="https://images.pexels.com/photos/6757486/pexels-photo-6757486.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="About Us"
      />

      <Description />

      <FooterBanner />
      <Footer />
    </div>
  );
}

export default About;
