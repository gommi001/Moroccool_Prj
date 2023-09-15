import React from 'react'
import DesHero from '../../../components/deshero/DesHero'
import Dest from '../../../components/dest/Dest'
import Navbar from '../../../components/navbar/Navbar'
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"
import Hero from '../../../components/hero/Hero'


const MainDes = () => {
  return (
    <div className='mainDes'>
      <Navbar/>
      <Hero/>
      <Dest/>
      
      {/* Footer Section */}
      <FooterBanner/>
        <Foot/>
      
    </div>
  )
}

export default MainDes