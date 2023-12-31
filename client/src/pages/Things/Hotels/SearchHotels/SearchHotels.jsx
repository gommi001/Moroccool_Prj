import React from 'react'
import FindHot from '../../../../components/mainHotels/HotelsDestinations/FindHot'
import FindTypes from '../../../../components/mainHotels/hoteltypes/FindTypes'
import Navbar from '../../../../components/navbar/Navbar'
import HotRecommend from '../../../../components/HotRecommend'
import Foot from '../../../../components/foot/Footer'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import HeroDes from '../../../../components/heroDes/HeroDes'
import SearchItem from '../../../../components/searchitem/SearchItem'



const SearchHotels = () => {
  return (
    <div className='hotels'> 
      <Navbar/>
      <HeroDes
        image="https://images.unsplash.com/photo-1533501747004-381b96042e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        city="Hotels in Tangier"
        arcity="طنجة"
      />

      <SearchItem
        city=''
      />
      

      <FooterBanner/>
      <Foot/>
    </div>
  )
}

export default SearchHotels