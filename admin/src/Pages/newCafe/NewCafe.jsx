import "./newcafe.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import React, { useState, createRef } from "react";
import { cafeInputs } from "../../formSource";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Dropzone from 'react-dropzone';
import TvIcon from '@mui/icons-material/Tv';


const NewCafe = () => {

  const [files, setFiles]= useState("")

  const [info, setInfo] = useState({});
  const [services, setServices] = useState([]);
  const [socials, serSocials] = useState([]);


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
      const newCafe = {
      ...info,
        services
    };

    await axios.post("/cafes", newCafe)

    }catch(err){
      console.log(err)
    }
    navigate("/cafes")
  }

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="ntop">
          <h1 className="nTitle"> Add New Cafes And Restaurants </h1>
        </div>
        <div className="nbottom">
          
          <div className="right">

{/* ///////////// Form Starts Here //////////////////// */}
            <form>

          <h1>Upload Files to Gallery</h1>
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
              {cafeInputs.map((input)=>(             
                <div className="formInput" key={input.id}>
                  <label> {input.label} </label>
                  <input 
                  id={input.id} 
                  onChange={handleChange} 
                  type={input.type}
                  placeholder={input.placeholder} />
                </div>
              ))}

              <div className="formInput">
                <label>Description</label>  
                <em style={{color:"grey"}}>(Tell us more about your hotel or riad ... and make the client admire it more.)</em>              
                  <textarea id='description' rows="5" cols="50" onChange={handleChange}></textarea>
              </div>

              <div className="formInput">
                <label>Socials</label> 
                  <label><input id="services" type="text" onChange={handleChange} /></label>
              </div>

    <h1 className='titre'>Extra Infos</h1>
    <div className="services">
      <label>
        <input
          id='services'
          type="checkbox"
          value="Wifi"
          checked={services.includes('Wifi')}
          onChange={handleCheckboxChange}
        />
         Wifi
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
        Smoking Area
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

    <h1>Upload Your Menu Pictures</h1>
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

export default NewCafe;