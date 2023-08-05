import React, {useState} from 'react'
import './deshero.scss'
import invideo from '../../assets/invideo.mp4'
import {AiOutlineSearch} from 'react-icons/ai'
var data = require("./data.json");


const DesHero = () => {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
      };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
      };


  return (
    
        <div className='heroDes1'>
            <video autoPlay loop muted id='video'>
                <source src={invideo} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="des_content">
                <h1>Find Your Destination</h1>
                <h2>Top Visited Locations in Morocco</h2>
                <form className="form">
                    <div>
                        <input className='inp' type="text" placeholder='Search destinations' value={value} onChange={onChange}  /> 
                    </div>

                    <div>
                        <button className='hero_btn' onClick={() => onSearch(value)}><AiOutlineSearch className='icon'/></button>
                    </div>
                   
                </form>
                <div className="dropdown_data">
                {data
                .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
            </div>
        </div>
    
  )
}

export default DesHero