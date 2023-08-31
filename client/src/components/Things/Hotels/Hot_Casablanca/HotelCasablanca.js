import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import HeroDes from '../../../../components/heroDes/HeroDes'
import useFetch from '../../../../hooks/useFetch'
import SearchItem from '../../../../components/searchitem/SearchItem'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import './casablancahotel.scss'
import { useLocation } from 'react-router-dom'



const HotelCasablanca = () => {


  return (
    <div className='casablanca'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Hotels in Casablanca"
        arcity=""
      />
              
      <SearchItem 
        city='casablanca'
        destination='Casablanca'
      />
       
      <FooterBanner/>
      <Foot/>

    </div>
  )
}

export default HotelCasablanca