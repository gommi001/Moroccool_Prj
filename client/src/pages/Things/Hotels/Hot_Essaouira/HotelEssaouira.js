import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import HeroDes from '../../../../components/heroDes/HeroDes'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import SearchItem from '../../../../components/searchitem/SearchItem'
import useFetch from '../../../../hooks/useFetch'


const Meknes = () => {

  const { data, loading, error, reFetch } = useFetch(`/hotels?city=essaouira`)


  return (

    <div className='meknes'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/6662921/pexels-photo-6662921.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Hotels and Riads in Essaouira"
        arcity="الصويرة"
      />

      <SearchItem 
        city='essaouira'
      />
      
      <FilterCafe/>
      
      <FooterBanner/>
      <Foot/>

      
    </div>
  )
}

export default Meknes