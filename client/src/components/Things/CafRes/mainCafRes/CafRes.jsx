import React from 'react'
import Find from '../../../../components/CafDestinations/FindCaf'
import Navbar from '../../../../components/navbar/Navbar'
import CafRecommend from '../../../../components/CafRecommend'
import Counter from '../../../../components/counter/Counter'
import './cafres.scss'
import HeroDes from '../../../../components/heroDes/HeroDes'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'



const CafRes = () => {
  return (
    <div className='cafres'>
      <Navbar/>
      <HeroDes
        image='https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60'
        city='Cafes & Restaurants'
      />

      <Find
        title="Cafes & Restaurants in Morocco"
        subtitle="Discover Cafes and Restaurants in many cities"
      /> 
      <Counter/>        
      <CafRecommend/>
      

      <FooterBanner/>
      <Foot/>
      
      
    </div>
  )
}

export default CafRes