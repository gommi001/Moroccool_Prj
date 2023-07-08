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
          <h1>Nearby Cities<NearMeIcon fontSize='xx-large' style={{color:'red'}}/></h1>
          <p>You can discover the cities nearby {props.city}</p>
          <div className="tripcard">
                  
       <div className="t-card" onClick={handleClickOpen('paper')}>
       <div className="t-image">
              <img src={props.img1} alt="image"/>
       </div>
       <h4>{props.title1}</h4>
       <p>{props.text1}</p>
       <Button variant="contained" startIcon={<LocalAirportIcon /> } color="error" onClick={handleClickOpen('paper')}>
              Discover
       </Button>
       </div>

       <div className="t-card">
       <div className="t-image">
              <img src={props.img2} alt="image"/>
       </div>
       <h4>{props.title2}</h4>
       <p>{props.text2}</p>
       <Button variant="contained" startIcon={<LocalAirportIcon /> } color="error" onClick={handleClickOpen('paper')}>
              Choose
       </Button>
      
       </div>

       <div className="t-card">
       <div className="t-image">
              <img src={props.img3} alt="image"/>
       </div>
       <h4>{props.title3}</h4>
       <p>{props.text3}</p>
       <Button variant="contained" startIcon={<LocalAirportIcon /> } color="error" onClick={handleClickOpen('paper')}>
              Choose
       </Button>
       
       </div>
             

       </div>
</div>
  )
}

export default Programs