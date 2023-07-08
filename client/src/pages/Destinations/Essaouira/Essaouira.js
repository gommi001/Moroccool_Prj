import React, {useState} from 'react'
import HeroDes from '../../../components/heroDes/HeroDes'
import Navbar from '../../../components/navbar/Navbar'
import Gallery from '../../../components/gallery/Gallery'
import GridCat from '../../../components/grid/GridCat'
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CafRecommend from '../../../components/CafRecommend'
import axios from 'axios'
import Programs from '../../../components/programs/Programs'
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
            <div className="app1" >
        <div className="container1">
          <div className="top1">
            <div className="temp1">
              <h1> <p><CloudIcon fontSize='x-large'/></p><h1 onLoad={handleOnload}>°C</h1></h1>
            </div>
        </div>
          <div className="bottom1">
            <div className="feels">
              <p className='bold1'>°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>%</p>
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
        image="https://images.pexels.com/photos/6313467/pexels-photo-6313467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        city="Essaouira"
        
      />

      <GridCat
        link1='/things/cafres/cafeessaouira'
        link2='/events/eventessaouira'
        link3='/things/hotels/hotelessaouira'
      />

      <CafRecommend
        city="Casablanca"
      />

      <Tabs/>
      

      
      <Programs
      city="Essaouira"
        img1='https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        title1='Mohammedia'
        text1='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        

        img2='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vcm9jY298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        title2='El-Jadida'
        text2='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        

        img3='https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        title3='Rabat'
        text3='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        

      />

      

      <Gallery
        city = "Essaouira"
        img1 = "https://cdn.pixabay.com/photo/2016/02/26/13/26/morocco-1224034__340.jpg"
        img2 = "https://images.unsplash.com/photo-1580420994559-d4b063d64653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVzc2FvdWlyYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
        img3 = "https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXNzYW91aXJhfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        img4 = "https://images.unsplash.com/photo-1613057157282-cc3cbe630b26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNzYW91aXJhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        img5 = "https://cdn.pixabay.com/photo/2018/05/28/23/29/morocco-3437552__340.jpg"

      />

    {/* Map Section */}
      <h1>Essaouira's Map</h1>
      <div style={{width: "100%"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27211.838719446634!2d-9.783141805383584!3d31.51097848749304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sEssaouira!5e0!3m2!1sen!2sma!4v1682190043835!5m2!1sen!2sma" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


    {/* Footer Section */}
      <FooterBanner/>
      <Foot/>
    
    </div>

  )
}

export default Meknes