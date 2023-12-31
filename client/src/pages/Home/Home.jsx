import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Hero from '../../components/hero/Hero';
import Destinations from '../../components/destinations/Destinations';
import DesHero from '../../components/deshero/DesHero';
import Luxury from '../../components/luxury/Luxury';
import Selects from '../../components/selects/Selects';
import Find from '../../components/homeswipertypes/Find';
import Foot from '../../components/foot/Footer';
import FooterBanner from '../../components/footbanner/FooterBanner';
import { Scrollbars } from 'react-custom-scrollbars';
import Description from '../../components/DescMoroccool/Description';
import ScrollToTop from '../../components/ScrollToTop';
import Contact from '../../components/Contact';

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="home">
      <Navbar />
      <DesHero />
      <ScrollToTop />
      <Luxury />
      <Description />
      <Destinations />
      <Selects />
      <Find />
      <Contact />
      <FooterBanner />
      <Foot />
    </div>
  );
};

export default Home;
