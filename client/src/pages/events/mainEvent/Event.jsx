import React from 'react'
import Footer from '../../../components/foot/Footer'
import Navbar from '../../../components/navbar/Navbar'
import Recommend from '../../../components/Recommend'
import TabsEvents from '../../../components/tabsevents/TabsEvents'
import './event.scss'
import Slick from '../../../components/slick/Slick'
import Contact from '../../../components/footbanner/FooterBanner'
import FindEvent from '../../../components/eventDes/FindEvent'


const Event = () => {
  return (
    <div className='event'>
      <Navbar/>
      <div className='ev'>
        <img className='ev_img' alt='' src='https://images.pexels.com/photos/1918162/pexels-photo-1918162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Slick className='ev_sl'/>
      </div>
      <FindEvent/>
      <TabsEvents/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Event