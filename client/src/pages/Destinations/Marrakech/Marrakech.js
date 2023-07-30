import React, { useState, useEffect } from 'react';
import HeroDes from '../../../components/heroDes/HeroDes';
import Navbar from '../../../components/navbar/Navbaryy';
import Gallery from '../../../components/gallery/Gallery';
import GridCat from '../../../components/grid/GridCat';
import CafeRecommend from '../../../components/CafRecommend';
import Programs from '../../../components/programs/Programs';
import Footer from '../../../components/footer/Footer';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import axios from 'axios';
import Tabs from '../../../components/tabs/Tabs';
import Foot from '../../../components/foot/Footer';
import FooterBanner from '../../../components/footbanner/FooterBanner';

const Meknes = () => {
  const [data, setData] = useState({});

  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [WindSpeed, setWindSpeed] = useState('');
  const [clouds, setClouds] = useState('');
  const [tempmax, setTempMax] = useState('');

  /* const url = ; */

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Marrakech&appid=b2747cf8f61c26a33e39ddb183dc29bb&units=metric'
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
    <div className="marrakech">
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
              <p className="bold">{clouds}</p>
              <p>
                <CloudIcon fontSize="medium" />
              </p>
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
      <Navbar />
      <HeroDes
        image="https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFycmFrZWNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        city="Marrakech"
      />

      <GridCat
        link1="/things/cafres/cafemarrakech"
        link2="/events/eventmarrakech"
        link3="/things/hotels/hotmarrakech"
      />

      <CafeRecommend />

      <Tabs />

      <Programs
        img1="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title1="Visit Places"
        text1="Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
        link1="/destination/fes"
        img2="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vcm9jY298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title2="Find Places"
        text2="Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
        link2="/destination/fes"
        img3="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title3="Discover Places"
        text3="Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
        link3="/destination/fes"
      />

      <Gallery
        city="Marrakech"
        img1="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        img2="https://images.unsplash.com/photo-1635182584134-04cd1e643289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhc2FibGFuY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        img3="https://cdn.pixabay.com/photo/2022/08/18/14/29/hassan-ii-mosque-7395036__340.jpg"
        img4="https://images.unsplash.com/photo-1577147443647-81856d5151af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        img5="https://images.unsplash.com/photo-1579017461826-8ea20d5cdb28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzYWJsYW5jYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
      />

      {/* Map Section */}
      <h1>Marrakech's Map</h1>
      <div style={{ width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.95890996489!2d-8.090255201860222!3d31.63474115112497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech!5e0!3m2!1sfr!2sma!4v1684527141030!5m2!1sfr!2sma"
          width="100%"
          height="550"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer Section */}
      <FooterBanner />
      <Foot />
    </div>
  );
};

export default Meknes;
