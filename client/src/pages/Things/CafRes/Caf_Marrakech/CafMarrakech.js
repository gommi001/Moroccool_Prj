import React from 'react'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Navbar from '../../../../components/navbar/Navbar'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import CafeCards from '../../../../components/cafeCards/CafeCards'



const CafMarrakech = () => {
  return (
    <div className='meknes'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/943510/pexels-photo-943510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        city="Cafe & Restaurant in Marrakech"
        arcity=''
      />
      
      <CafeCards
        city='marrakech'
        destination='Marrakech'
      />

      <FilterCafe/>

      <FooterBanner/>
      <Foot/>

      
    </div>
  )
}

export default CafMarrakech