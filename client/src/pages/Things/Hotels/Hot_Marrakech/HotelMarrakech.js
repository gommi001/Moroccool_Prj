import React from 'react'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Navbar from '../../../../components/navbar/Navbar'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Footer from '../../../../components/foot/Footer'
import SearchItem from '../../../../components/searchitem/SearchItem'
import FilterHotel from '../../../../components/FilterHotel'


const HotelMarrakech = () => {
  return (
    <div className='meknes'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/6621125/pexels-photo-6621125.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Hotels and Riads in Marrakech"
        arcity="مراكش"
      />

      {/* <SearchItem
        city='marrakech'
        destination='Marrakech'
      />  */}

      <FilterHotel
        destination='marrakech'
      />

      <FooterBanner/>
      <Footer/>
      
    </div>
  )
}

export default HotelMarrakech