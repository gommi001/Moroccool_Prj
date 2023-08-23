import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import HeroDes from '../../../../components/heroDes/HeroDes'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import CafeCards from '../../../../components/cafeCards/CafeCards'



const CafFes = () => {
  return (
    <div className='fes'>
      <Navbar/>
      <HeroDes
        image="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2022/01/2an8yjj-e1641386047857.jpg"
        city="Cafe & Restaurant In Fes"
        arcity=''
      />

      <CafeCards
        city='fes'
        destination='Fes'
      />

      <FilterCafe/>  

      <FooterBanner/>
      <Foot/>             
      
    </div>
  )
}

export default CafFes