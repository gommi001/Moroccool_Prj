import React from 'react'
import DesHero from '../../../components/deshero/DesHero'
import Dest from '../../../components/dest/Dest'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"


const MainDes = () => {
  return (
    <div className='mainDes'>
      <Navbar/>
      <DesHero/>
      <Dest/>
      {/* Footer Section */}
      <FooterBanner/>
        <Foot/>
      
    </div>
  )
}

export default MainDes