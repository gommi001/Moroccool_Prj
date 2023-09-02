import React from 'react'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Navbar from '../../../../components/navbar/Navbar'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import Footer from '../../../../components/foot/Footer'
import SearchItem from '../../../../components/searchitem/SearchItem'
import FilterHotel from '../../../../components/FilterHotel'



const HotelTangier = () => {
  return (
    <div className='meknes'>
      <Navbar/>
      <HeroDes
        image="https://images.unsplash.com/photo-1533501747004-381b96042e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        city="Hotels in Tangier"
        arcity="طنجة"
      />

      {/* <SearchItem
        city='tanger'
        destination='Tangier'
      />  */}

      <FilterHotel
        destination='tanger'
      />



      <FooterBanner/>
      <Footer/>
      
      
    </div>
  )
}

export default HotelTangier