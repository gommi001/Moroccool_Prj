import React,{useState} from 'react'
import HeroDes from '../../../components/heroDes/HeroDes'
import Navbar from '../../../components/navbar/Navbar'
import Gallery from '../../../components/gallery/Gallery'
import Programs from '../../../components/programs/Programs'
import CafeRecommend from '../../../components/CafRecommend'
import GridCat from '../../../components/grid/GridCat'
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import axios from 'axios'
import './tangier.scss'
import Tabs from '../../../components/tabs/Tabs'
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"



const Meknes = () => {

  const [data, setData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Casablanca&appid=b2747cf8f61c26a33e39ddb183dc29bb`

  const handleOnload = () => {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })      
  }

  return (
    <div className='meknes'>
      <div className="app1">
        <div className="container1">
          <div className="top1">
            <div className="temp1">
              <h1> <p><CloudIcon fontSize='x-large'/></p> 60 °F</h1>
            </div>
        </div>
          <div className="bottom1">
            <div className="feels">
              <p className='bold1'>60 °F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>2%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>15 MPH</p>
              <p>Wind Speed</p>
            </div>
            <div className="wind">
              <p className='bold'><WbSunnyIcon fontSize='medium' /></p>
              <p>Clear</p>
            </div>
          </div>
      </div>
    </div> 
      <Navbar/>
      <HeroDes
        image="https://images.unsplash.com/photo-1533501747004-381b96042e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        city="Tangier"
        
      />

      <GridCat
        link1='/things/cafres/cafetangier'
        link2='/events/eventtangier'
        link3='/things/hotels/hoteltangier'
      />

      <CafeRecommend/>

      <Tabs/>


      <Programs
        img1='https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        title1='Visit Places'
        text1='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        

        img2='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vcm9jY298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        title2='Find Places'
        text2='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        

        img3='https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        title3='Discover Places'
        text3='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'       
      />

      
      <Gallery
        city = "Tangier"
        img1 = "https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        img2 = "https://images.unsplash.com/photo-1635182584134-04cd1e643289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhc2FibGFuY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        img3 = "https://cdn.pixabay.com/photo/2022/08/18/14/29/hassan-ii-mosque-7395036__340.jpg"
        img4 = "https://images.unsplash.com/photo-1577147443647-81856d5151af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        img5 = "https://images.unsplash.com/photo-1579017461826-8ea20d5cdb28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"

      />


    {/* Map Section */}
      <h1>Tangier's Map</h1>
      <div style={{width: "100%"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103599.61833322445!2d-5.916871699404146!3d35.76338544936629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTanger!5e0!3m2!1sfr!2sma!4v1684527286456!5m2!1sfr!2sma" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> 

    
      {/* Footer Section */}
      <FooterBanner/>
        <Foot/>
      
    </div>
  )
}

export default Meknes