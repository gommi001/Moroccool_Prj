import React from 'react'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Navbar from '../../../../components/navbar/Navbar'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import SearchItem from '../../../../components/searchitem/SearchItem'
import Footer from '../../../../components/foot/Footer'
import FilterHotel from '../../../../components/FilterHotel'



const HotelRabat = () => {
  return (
    <div className='meknes'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/10223422/pexels-photo-10223422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        city="Hotels and Riads in Rabat"
      />

      {/* <SearchItem 
        city='rabat'
        destination='Rabat'
      />  */}

      <FilterHotel
        destination='rabat'
      /> 


      <FooterBanner/>
      <Footer/>

    </div>
  )
}

export default HotelRabat