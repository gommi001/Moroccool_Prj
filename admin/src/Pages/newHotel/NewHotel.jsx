import React, {createRef} from 'react';
import "./newhotel.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState } from "react";
import { hotelInputs } from "../../formSource";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Grid, TextField, Typography, input, Checkbox, Button, Box, Alert, InputLabel, MenuItem, Select, FormControl, FormLabel, RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, FormControlLabel } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import RouterIcon from '@mui/icons-material/Router';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import TvIcon from '@mui/icons-material/Tv';


const NewHotel = () => {

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


  {/* 
  function handlePerks(ev) {
    const {checked,name} = ev.target;
    if (checked) {
      onChange([...selected,name]);
    } else {
      onChange([...selected.filter(selectedName => selectedName !== name)]);
    }
  }
  */}
  const perks = (e) => {
    let data = services
    data.push(e.target.value)
    setServices(data)
  }

  const handleClick =async e =>{
    e.preventDefault()
    const data= new FormData()
    try{ 
      const newHotel = {
      ...info,
      services
    };

    await axios.post("/hotels", newHotel)

    }catch(err){
      console.log(err)
    }
    navigate("/hotels")
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
        <h1>Upload Files</h1>
          <Dropzone ref={dropzoneRef} noClick noKeyboard>
            {({getRootProps, getInputProps, acceptedFiles}) => {
           return (
           <div onClick={openDialog} className="dropzone">
          <div {...getRootProps({className: ''})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <em>(Drop here all the pictures of your Hotel and add it to your Gallery)</em>
          </div>
          <aside>
          <h4>Files</h4>
          <ul>
            {acceptedFiles.map(file => (
              <li key={file.path}>
                {file.path} - {file.size} bytes
              </li>
            ))}
          </ul>
          </aside>
          </div>
          );
          }}
        </Dropzone>

        <h1 className='titre'>Your Informations</h1>
              {hotelInputs.map((input)=>(             
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

              
    <h1 className='titre'>Your Services</h1>
    <div className='services'>
      <label>
        <input
          id='services'
          type="checkbox"
          value="Wifi"
          checked={services.includes('Wifi')}
          onChange={handleCheckboxChange}
        />
         <RouterIcon fontSize='medium'/> Wifi
      </label>
      <label>
        <input
          id='services'
          type="checkbox"
          value="Kids Space"
          checked={services.includes('Kids Space')}
          onChange={handleCheckboxChange}
        />
        Kids Space
      </label>
      <label>
        <input
          id='services'
          type="checkbox"
          value="Family Space"
          checked={services.includes('Family Space')}
          onChange={handleCheckboxChange}
        />
        Family Space
      </label>
      <label>
        <input
          id='services'
          type="checkbox"
          value="Smoking Area"
          checked={services.includes('Smoking Area')}
          onChange={handleCheckboxChange}
        />
        <SmokingRoomsIcon fontSize='medium'/> Smoking Area
      </label>
      <label>
        <input
          id='services'
          type="checkbox"
          value="Bein Sport"
          checked={services.includes('Bein Sport')}
          onChange={handleCheckboxChange}
        />
        <TvIcon fontSize='medium'/> Bein Sport
      </label>
    </div>

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

export default NewHotel;