import React, { useState } from "react";
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Recommend() {
  const data = [
    {
      image: 'https://gcdn.imgix.net/events/haroun-seuls-a-casablanca-6.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Haroun - Seuls à Casablanca",
      location: "Casablanca, Complexe Culturel Anfa",
      cost: "380$",
      date: "11/12/2022",
    },
    {
      image: 'https://gcdn.imgix.net/events/humour-chaque-vendredi-et-samedi.jpg',
      title: "Humour Chaque Vendredi et Samedi",
      location: "Thailand is a Southeast Asia country. It's known for",
      cost: "54.80$",
      date: "11/12/2022",
    },
    {
      image: 'https://gcdn.imgix.net/events/yassine-belattar-a-rabat-2.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Yassine Belattar à Casablanca",
      location: "Paris, France's capital, is a major European city and a",
      cost: "45$",
      date: "11/12/2022",
    },
    {
      image: 'https://gcdn.imgix.net/events/le-jazz-au-chellah-a-rabat-j2.jpg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Le Jazz au Chellah à Rabat / Pass 4j",
      location: "New Zealand is an island country in the",
      cost: "120$",
      date: "11/12/2022",
    },
    {
      image: 'https://gcdn.imgix.net/events/ilyes-djadel-a-casablanca-2.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Ilyes Djadel à Casablanca",
      location: "Bora Bora is a small South Pacific island northwest of",
      cost: "100$",
      date: "11/12/2022",
    },
    {
      image: 'https://gcdn.imgix.net/events/tarab-ambassadors-6eme-edition.jpg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Haj Said berrada et Abdellah El Makhtoubi",
      location: "London, the capital of England and the United",
      cost: "50$",
      date: "11/12/2022",
    },
    {
      image: 'https://gcdn.imgix.net/events/ilyes-djadel-a-casablanca-2.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Ilyes Djadel à Casablanca",
      location: "Bora Bora is a small South Pacific island northwest of",
      cost: "100$",
      date: "11/12/2022",
    },
   
    {
      image: 'https://gcdn.imgix.net/events/yassine-belattar-a-rabat-2.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Yassine Belattar à Casablanca",
      location: "Paris, France's capital, is a major European city and a",
      cost: "45$",
      date: "11/12/2022",
    },

    {
      image: 'https://gcdn.imgix.net/events/ilyes-djadel-a-casablanca-2.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80',
      title: "Ilyes Djadel à Casablanca",
      location: "Bora Bora is a small South Pacific island northwest of",
      cost: "100$",
      date: "11/12/2022",
    },

    
  ];

  const [active, setActive] = useState(1);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Section id="recommend">
     
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination" onClick={handleClickOpen}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p> <LocationOnIcon color="red" fontSize="small"/> {destination.location}</p>
              <div className="info">
                <div className="services">
                
                </div>
                
                <h4>{destination.cost}</h4>
                
              </div>
              <div className="distance">
                <span>{destination.date}</span>
              </div>
              
            </div>
          );
        })}
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Event's Title
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
          <span>
            <InstagramIcon/>
          </span>
          </Button>
          <Button onClick={handleClose} autoFocus>
          <span>
            <LanguageIcon/>
          </span>
          </Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
      cursor:pointer;
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
        display: flex;
        align-items: center;
        .services {
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
