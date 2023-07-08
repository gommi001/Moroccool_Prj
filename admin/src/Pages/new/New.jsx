import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState } from "react";
import axios from 'axios'

const New = ({inputs, title}) => {

  const [file, setFile]= useState("")
  
  const [info, setInfo] = useState({});

  const handleChange = e =>{
    setInfo(prev =>({...prev,[e.target.id] : e.target.value}))
  };

  const handleClick =async e =>{
    e.preventDefault()
    const data= new FormData()
    data.append("file", file)
    data.append("upload_preset", "upload")
    try{
      const uploadRes = axios.post(
        "https://api.cloudinary.com/v1_1/moroccool/image/upload",
        data
        )

    const { url }= (await uploadRes).data;

    const newUser = {
      ...info,
      img: url,
    };

    await axios.post("/auth/register", newUser)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="ntop">
          <h1 className="nTitle"> {title} </h1>
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

              {inputs.map((input)=>(             
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

              <button onClick={handleClick}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New