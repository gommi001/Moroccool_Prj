import React, { useEffect, useState } from "react";
import "./Footer.scss";
import PaymentIcon from '@mui/icons-material/Payment';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import axios from 'axios'
import logo from '../../assets/moroccol_logo.png'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
const Footer = () => {

      // const ipLo = document.getElementById('id')
      // const countryLo = document.getElementById('country')
      // const cityLo = document.getElementById('city')

        
      //   fetch('http://ip-api.com/json/?fields=61439')
      //       .then(res => res.json())
      //       .then(res => console.log(res));

      const [city, setCity] = useState('');
      const [country, setCountry] = useState('');
      const [code, setCode] = useState('');
  
        useEffect(() => {
          // Fetch user's city using ip-api.com API
          axios.get('http://ip-api.com/json')
            .then(response => {
              setCity(response.data.city);
              setCountry(response.data.country);
              setCode(response.data.countryCode);
            })
            .catch(error => {
              console.error('Error fetching city:', error);
            });
        }, []);
     

  return (
    <div className="foot">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

         <div className="item">
          <h1>About</h1>
          <span>Male </span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>     
        
        
      </div>
      <div className="bottom">
        <div className="left">
          <img src={logo} alt="" className="logo"/> 
        </div>
        
        <div className="right">
        {city ? (
        <p><LocationOnRoundedIcon/> {country} , {city}</p>
      ) : (
        <p>Loading city...</p>
      )}  
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
