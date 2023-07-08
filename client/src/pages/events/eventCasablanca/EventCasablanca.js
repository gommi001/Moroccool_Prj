import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Hero from '../../../components/heroDes/HeroDes'
import FilterCafe from '../../../components/FilterCafe'
import FooterBanner from '../../../components/footbanner/FooterBanner'
import Foot from "../../../components/foot/Footer"


function EventCasablanca() {
  return (
    <div>
        <Navbar/>
        <Hero
          image="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZlc3RpdmFsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          city="Events in Casablanca"
        />

        <FilterCafe/>

        <FooterBanner/>
        <Foot/>       
        
    </div>
  )
}

export default EventCasablanca