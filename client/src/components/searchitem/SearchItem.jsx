import React, { useState } from "react";
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './searchitem.scss'
import HotelIcon from '@mui/icons-material/Hotel';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import HotTubIcon from '@mui/icons-material/HotTub';
import PoolIcon from '@mui/icons-material/Pool';
import { Link } from "react-router-dom";


export default function Recommend({item}) {
 

  const [active, setActive]=useState(1)
  

  return (

    <div id="recommend">    
    <Link to={`/things/cafres/cafepage/${item._id}`}>
    <div className="destinations">         
            <div className="destination">
              <img src={item.photos[0]} alt="" />
              <h3>{item.name}</h3>
              <p> <LocationOnIcon className="loc_icon" fontSize="small"/>{item.location}</p>
              <div className="info">
                <div className="services">
                  <HotelIcon/>
                  <PoolIcon/>
                  <HotTubIcon/>
                </div>
                <h4 className="tit">{item.city}</h4>
              </div>
            </div>       
      </div>
    </Link>
    </div> 
    
  );
}


