import React from 'react'
import './programs.scss'
import Button from '@mui/material/Button';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link } from 'react-router-dom';


function Programs(props) {

       const [open, setOpen] = React.useState(false);
       const [scroll, setScroll] = React.useState('paper');
     
       const handleClickOpen = (scrollType) => () => {
         setOpen(true);
         setScroll(scrollType);
       };

       const handleClose = () => {
         setOpen(false);
       };    
      

  return (
    <div className="trip">
          <h1>Nearby Cities</h1>
          <p>You can discover the cities nearby {props.city}</p>
          <div className="tripcard">
                  
       <div className="t-card" >
       <div className="t-image">
              <img src={props.img1} alt="image"/>
       </div>
       <h4>{props.title1}</h4>
       <p>{props.text1}</p>
       <Link to={props.link1}><Button variant="contained" startIcon={<LocalAirportIcon /> } color="error" >Discover</Button></Link>
       </div>

       <div className="t-card">
       <div className="t-image">
              <img src={props.img2} alt="image"/>
       </div>
       <h4>{props.title2}</h4>
       <p>{props.text2}</p>
       <Link to={props.link2}><Button variant="contained" startIcon={<LocalAirportIcon /> } color="error" >Discover</Button></Link>
       
      
       </div>

       <div className="t-card">
       <div className="t-image">
              <img src={props.img3} alt="image"/>
       </div>
       <h4>{props.title3}</h4>
       <p>{props.text3}</p>
       <Link to={props.link3}><Button variant="contained" startIcon={<LocalAirportIcon /> } color="error" >Choose</Button></Link>
       
       </div>
             

       </div>
</div>
  )
}

export default Programs