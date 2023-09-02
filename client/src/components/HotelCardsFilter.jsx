import React, { useState } from "react";
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import HotTubIcon from '@mui/icons-material/HotTub';
import PoolIcon from '@mui/icons-material/Pool';
import { Link, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CircularProgress } from '@mui/material';


export default function Recommend(props) {

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${props.city}&services=${props.service}`)

  
 
  const [active, setActive]=useState(1) 

  return (

      <Section id="recommend">

            {loading ?
          (<CircularProgress color="inherit" />)  : ( 
            <div className="destinations">
            {data.map((item) => {
              return (  
                  <div key={item._id} className="destination">
                        <Link className="link" to={`/things/hotels/${item._id}/`}>
                        <div className="cont">
                            <img src={item.photos[0]} alt="" />                          
                            <h5 className="type">{item.type}</h5>  
                          </div>
                        </Link>
                    <h3>{item.name}</h3>
                    <p> <LocationOnIcon className="loc_icon" fontSize="small"/> {item.location} </p>
                    <div className="info">
                      <div className="services">
                          <HotelIcon/>
                          <PoolIcon/>
                          <HotTubIcon/>
                      </div>
                    </div>
                    <div className="distance">
                      <a href={`/destination/${item.city}`} ><h4>{item.city}</h4></a>
                    </div>
                  </div>
                  
                );
              })}
            </div>
            )}
      </Section>
    
  );
}

const Section = styled.section`
  padding: 4rem 0;
  .title {
    padding: 1rem;
    position: relative;
    margin-bottom: 6%;
  }
  .title ::after{
    content: '';
    background: #f12c2c;
    width: 120px;
    height: 5px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0 3rem;
    .destination {
      text-transform: capitalize;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #713fb818;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.1rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
      }

      .cont{
        position: relative;
        text-align: center;

        .type{
            color:white;
            position: absolute;
            top: 8px;
            right: 16px;
            border-radius:10%
        }
      }

      img {
        width: 100%;
        border-radius: 1rem;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          color:red;
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

