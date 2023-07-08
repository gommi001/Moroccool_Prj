import React, { useState } from "react";
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";


export default function Recommend(props) {
  const data = [
    {
      image: 'https://images.unsplash.com/photo-1527777239963-58f0a83566f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9yb2NjbyUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: "CAfe Ilyes",
      location: "Rabat - Morocco",
  
    },
   
    
   
    {
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: "Restaurant Amine",
      location: "Fes - Morocco",
   
    },

    

    {
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: "Cafe",
      location: "Rabat - Agdal - Morocco",
     
    },
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Weekly Trend <Rating name="read-only" value={5} readOnly /> </h2>
      </div>
     
    <div className="destinations">
      {data.map((destination) => {
        return (
          <Link to='cafepage'>
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p> <LocationOnIcon className="loc_icon" fontSize="small"/> {destination.location}</p>
              <div className="info">
                <div className="services">
                  <RestaurantIcon/>
                  <FreeBreakfastIcon/>
                  <WifiIcon/>
                </div>
                <h4 className="tit">{destination.cost}</h4>
              </div>

            </div>
            </Link>
          );
        })}
      </div>
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
  h2 ::after{
    content: '';
    background: #ffffff;
    width: 120px;
    height: 5px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .destinations {
    color:black;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 90%;
        border-radius: 1rem;
      }
      .info {
        color:black;
        display: flex;
        align-items: center;

        .tit{
          color:black;
        }
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
