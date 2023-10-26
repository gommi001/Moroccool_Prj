import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import Museum from '../../../components/museums/Museum';
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"
import Hero from '../../../components/hero/Hero'


function Museums() {
  return (
    <div>
        <Navbar/>
        <Hero
          img="https://fnm.ma/wp-content/uploads/2021/12/harris-home.jpg"
          title='MUSÉES'
          subtitle='Museums'
        />

        <Museum/>

        <FooterBanner/>
        <Foot/>

    </div>
  )
}

export default Museums