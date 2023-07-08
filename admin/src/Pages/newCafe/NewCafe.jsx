import "./newcafe.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState } from "react";
import { cafeInputs } from "../../formSource";

const NewCafe = () => {

  const [files, setFiles]= useState("")

  const [info, setInfo] = useState({});

  const handleChange = e =>{
    setInfo(prev =>({...prev,[e.target.id] : e.target.value}))
  };


  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="ntop">
          <h1 className="nTitle"> Add New Cafes And Restaurants </h1>
        </div>
        <div className="nbottom">
          <div className="left">
            <img 
              alt="" 
              className="nimg" 
              src={files ? URL.createObjectURL(files[0]) 
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
              } 
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" > 
                  Cafe Images  <CloudUploadOutlinedIcon className="icon8" /> 
                </label>
                <input 
                  type="file" 
                  id="file" 
                  multiple
                  onChange={e=>setFiles(e.target.files)}
                  style={{ display:"none" }} 
                />
              </div>

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

              <button>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCafe;