import React from 'react'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Navbar from '../../../../components/navbar/Navbar'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import CafeCards from '../../../../components/cafeCards/CafeCards'



const CafMeknes = () => {
  return (
    <div className='meknes'>
      <Navbar/>
      <HeroDes
        image="https://media.istockphoto.com/photos/ancient-gate-and-walls-of-bab-elmansour-in-meknes-morocco-north-picture-id1201510816?k=20&m=1201510816&s=612x612&w=0&h=ZYClIU2th6vaVcpNX8gbDe3vu2Cu0BNZfi-NtekM77U="
        city="Cafe & Restaurant in Meknes"
        arcity=''
      />

      <CafeCards
        city='meknes'
        destination='Meknes'
      />

      <FilterCafe
        destination='meknes'
      />
      
      <FooterBanner/>
      <Foot/>

    </div>
  )
}

export default CafMeknes