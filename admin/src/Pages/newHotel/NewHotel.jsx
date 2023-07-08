import "./newhotel.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState } from "react";
import { hotelInputs } from "../../formSource";

const NewHotel = () => {

  const [file, setFile]= useState("")
  console.log(file)

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="ntop">
          <h1 className="nTitle"> Add New Hotel </h1>
        </div>
        <div className="nbottom">
          <div className="left">
            <img 
              alt="" 
              className="nimg" 
              src={file ? URL.createObjectURL(file) 
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
              } 
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" > 
                  User Image  <CloudUploadOutlinedIcon className="icon8" /> 
                </label>
                <input 
                  type="file" 
                  id="file" 
                  onChange={e=>setFile(e.target.files[0])}
                  style={{ display:"none" }} 
                />
              </div>

              {hotelInputs.map((input)=>(             
                <div className="formInput" key={input.id}>
                  <label> {input.label} </label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHotel;