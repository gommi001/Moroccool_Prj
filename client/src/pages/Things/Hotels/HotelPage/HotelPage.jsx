import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Featured from '../../../../components/featured/Featured'
import Footer from '../../../../components/footer/Footer'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'



const HotelPage = () => {
  return (
    <div className='hotelpage'>
        <Navbar/>
        <HeroDes
        image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Welcome To Hotel AN-NASSIM"
        arcity=""
        />
        <Featured/>
        <Footer/>
    </div>
  )
}

export default HotelPage