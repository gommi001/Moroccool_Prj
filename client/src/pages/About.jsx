import React from 'react'
import HeroDes from '../components/heroDes/HeroDes'
import Navbar from '../components/navbar/Navbar'
import Description from '../components/DescMoroccool/Description'
import FooterBanner from '../components/footbanner/FooterBanner'
import Footer from '../components/foot/Footer'

function About() {
  return (
    <div>
        <Navbar/>
        <HeroDes
        image="https://images.pexels.com/photos/4359016/pexels-photo-4359016.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="About Us"   
        />
      
        <Description/>

        <FooterBanner/>
        <Footer/>

    </div>
  )
}

export default About