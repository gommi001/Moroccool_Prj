import React from "react";
import "./Footer.scss";
import PaymentIcon from '@mui/icons-material/Payment';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

const Footer = () => {
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
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        
        
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Moroccool</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <PaymentIcon/>
          <PriceChangeIcon/>
          <PaymentIcon/>
          <PriceChangeIcon/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
