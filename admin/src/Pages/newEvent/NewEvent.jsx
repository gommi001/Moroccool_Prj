import React, {createRef} from 'react';
import "./newevent.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState } from "react";
import { eventInputs } from "../../formSource";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Grid, TextField, Typography, input, Checkbox, Button, Box, Alert, InputLabel, MenuItem, Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, FormControlLabel } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import RouterIcon from '@mui/icons-material/Router';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import TvIcon from '@mui/icons-material/Tv';


const NewEvent = () => {

  const [file, setFile]= useState("")
  const [info, setInfo] = useState({});
  const [services, setServices] = useState([]);

  const dropzoneRef = createRef();
  const openDialog = () => {
    // Note that the ref is set async,
    // so it might be null at some point 
    if (dropzoneRef.current) {
      dropzoneRef.current.open()
    }
  };

  const navigate = useNavigate()

  const handleChange = e =>{
    setInfo(prev =>({...prev,[e.target.id] : e.target.value}))
  };


  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServices([...services, value]);
    } else {
      setServices(services.filter(item => item !== value));
    }
  };


  
  const handleClick =async e =>{
    e.preventDefault()
    const data= new FormData()
    try{ 
      const newHotel = {
      ...info,
      
    };

    await axios.post("/events", newHotel)

    }catch(err){
      console.log(err)
    }
    navigate("/events")
  }

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="ntop">
          <h1 className="nTitle"> Add New Hotel </h1>
        </div>

        <div className="nbottom">  
        <div className="right">


{/* ///////////// Form Starts Here //////////////////// */}
      <form>
        <h1>Upload Cover Picture</h1>
          <input type='file'/>

        <h1 className='titre'>Informations About This Event</h1>
              {eventInputs.map((input)=>(             
                <div className="formInput" key={input.id}>
                  <label> {input.label} </label>
                  <input 
                  onChange={handleChange}
                  type={input.type} 
                  placeholder={input.placeholder} 
                  id={input.id}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Description</label>  
                <em style={{color:"grey"}}>(Tell us more about your hotel or riad ... and make the client admire it more.)</em>              
                  <textarea id='description' rows="5" cols="50" onChange={handleChange}></textarea>
              </div>

              
    <h1 className='titre'>Your Socials</h1>
       

          <h1 className='titre'>Featured Option</h1>
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
          

              <button onClick={handleClick}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEvent;