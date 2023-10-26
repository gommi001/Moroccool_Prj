import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import FindHot from '../../../../components/mainHotels/HotelsDestinations/FindHot'
import FindTypes from '../../../../components/mainHotels/hoteltypes/FindTypes'
import Navbar from '../../../../components/navbar/Navbar'
import './hotels.scss'
import HotRecommend from '../../../../components/HotRecommend' 
import Counter from '../../../../components/counter/Counter'
import HeroHot from '../../../../components/mainHotels/herohot/HeroHot'
import Foot from '../../../../components/foot/Footer'
import FooterBanner from '../../../../components/footbanner/FooterBanner'




const Hotels = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className='hotels'> 
      <Navbar/>
      <HeroHot/>
      <FindHot/>
      <FindTypes/>
      <Counter/>
      <HotRecommend/>
      <FooterBanner/>
      <Foot/>
    </div>
  )
}

export default Hotels