import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const New = ({inputs, title}) => {

  const [file, setFile]= useState("")
  
  const [info, setInfo] = useState({});

  const handleChange = e =>{
    setInfo(prev =>({...prev,[e.target.id] : e.target.value}))
  };

  const navigate = useNavigate()

  const handleClick =async e =>{
    e.preventDefault()
    const data= new FormData()
    try{ 
      const newUser = {
      ...info,
      
    };

    await axios.post("/auth/register", newUser)

    }catch(err){
      console.log(err)
    }
    navigate("/users")
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
          
          <div className="right">
            <form>
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

          <h1 className='titre'>User Role Option</h1>
              <div className="formInput">
                <label>Role : </label>
                <select id="role" onChange={handleChange}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
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

export default New