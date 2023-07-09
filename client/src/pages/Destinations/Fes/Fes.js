import React,{useState, useEffect} from 'react'
import Navbar from '../../../components/navbar/Navbar'
import HeroDes from '../../../components/heroDes/HeroDes'
import Selects from '../../../components/selects/Selects'
import Programs from '../../../components/programs/Programs'
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Gallery from '../../../components/gallery/Gallery'
import GridCat from '../../../components/grid/GridCat'
import Footer from '../../../components/footer/Footer'
import CafeRecommend from '../../../components/CafRecommend'
import Tabs from '../../../components/tabs/Tabs'
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"




const Fes = () => {

  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [WindSpeed, setWindSpeed] = useState('');
  const [clouds, setClouds] = useState('');
  const [tempmax, setTempMax] = useState('');

  /* const url = ; */

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Fes&appid=b2747cf8f61c26a33e39ddb183dc29bb&units=metric'
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.main) {
          setTemperature(data.main.temp);
          setHumidity(data.main.humidity);
          setWindSpeed(data.wind.speed);
          setClouds(data.weather[0].description);
          setTempMax(data.main.temp_max);
        } else {
          console.log('Unable to retrieve humidity data');
        }
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div className='fes'>
      <div className="app1">
        <div className="container1">
          <div className="top1">
            <div className="temp1">
              <h1>
                {' '}
                <p>
                  <CloudIcon fontSize="x-large" />
                </p>
                <h1>{temperature}°C</h1>
              </h1>
            </div>
          </div>
          <div className="bottom1">
          <div className="wind">
              <p className="bold">
              {clouds}
              </p>
              <p><CloudIcon fontSize="medium" /></p>
            </div>
            
            <div className="humidity">
              <p className="bold">{humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{WindSpeed}KMH</p>
              <p>Wind</p>
            </div>
            <div className="feels">
              <p className="bold1">{tempmax}°C</p>
              <p>Temp max</p>
            </div>           
          </div>
        </div>
      </div>
      <Navbar/>
      <HeroDes
        image="https://images.unsplash.com/photo-1512958789358-4effcbe171a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZlcyUyMG1vcm9jY298ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        city="Fes"
       
      />

      
      <GridCat
        link1='/things/cafres/cafefes'
        link2='/events/eventfes'
        link3='/things/hotels/hotelfes'
      />

      <CafeRecommend/>

      <Tabs/>

      
      <Programs
      city="Fes"
        img1='https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        title1='Mohammedia'
        text1='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        link1='/destination/fes'
        

        img2='https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vcm9jY298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        title2='El-Jadida'
        text2='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        link2='/destination/fes'

        img3='https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        title3='Rabat'
        text3='Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        link3='/destination/fes'
        

      />

      <Gallery
        city = "Fes"
        img1 = "https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        img2 = "https://images.unsplash.com/photo-1635182584134-04cd1e643289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhc2FibGFuY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        img3 = "https://cdn.pixabay.com/photo/2022/08/18/14/29/hassan-ii-mosque-7395036__340.jpg"
        img4 = "https://images.unsplash.com/photo-1577147443647-81856d5151af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        img5 = "https://images.unsplash.com/photo-1579017461826-8ea20d5cdb28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"

      />

       {/* Map Section */}
    <h1>Fes's Map</h1>
    <div style={{width: "100%"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105816.68568481569!2d-5.084142387606012!3d34.02407765191764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b484d445777%3A0x10e6aaaeedd802ef!2sFes!5e0!3m2!1sen!2sma!4v1682275192997!5m2!1sen!2sma" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   
     {/* Footer Section */}
     <FooterBanner/>
        <Foot/>

    </div>
  )
}

export default Fes