import React from 'react'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Navbar from '../../../../components/navbar/Navbar'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'



const CafEssaouira = () => {
  return (
    <div className='essaouira'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/6313467/pexels-photo-6313467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        city="Cafe & Restaurant In Essaouira" 
        arcity=''
      />

      <FilterCafe/>

      <FooterBanner/>
      <Foot/>

      
    </div>
  )
}

export default CafEssaouira