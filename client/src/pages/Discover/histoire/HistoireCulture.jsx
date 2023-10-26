import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"
import Hero from '../../../components/hero/Hero'


function HistoireCulture() {
  return (
    <div>
        <Navbar/>
        <Hero
          img=""
          title='Histoire et Culture'
          subtitle='Museums'
        />
    </div>
  )
}

export default HistoireCulture