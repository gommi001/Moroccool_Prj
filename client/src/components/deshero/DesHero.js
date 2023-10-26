import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './deshero.scss';
import invideo from '../../assets/invideo.mp4';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const DesHero = () => {

  const placeSuggestions = [
    { name: 'Meknes', image: 'https://images.pexels.com/photos/11642572/pexels-photo-11642572.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Marrakech', image: 'https://images.pexels.com/photos/4502973/pexels-photo-4502973.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Fes', image: 'https://images.pexels.com/photos/3525903/pexels-photo-3525903.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Casablanca', image: 'https://images.pexels.com/photos/12433310/pexels-photo-12433310.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Essaouira', image: 'https://images.pexels.com/photos/6313478/pexels-photo-6313478.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Rabat', image: 'https://images.pexels.com/photos/6313478/pexels-photo-6313478.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Tanger', image: 'https://images.pexels.com/photos/6313478/pexels-photo-6313478.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Agadir', image: 'https://images.pexels.com/photos/6313478/pexels-photo-6313478.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Assilah', image: 'https://images.unsplash.com/photo-1650385125378-97b67e802d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNzaWxhaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'AlHoceima', image: 'https://images.unsplash.com/photo-1660972288441-18e89c4ec325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWwlMjBob2NlaW1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: 'Chefchaouen', image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZmNoYW91ZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'ElJadida', image: 'https://images.unsplash.com/photo-1670896973681-e704b05dd9de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWwlMjBqYWRpZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'Ifrane', image: 'https://images.unsplash.com/photo-1611358382200-5baf13de1b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWZyYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { name: 'Kenitra', image: 'https://images.unsplash.com/photo-1624363414140-1f192a034b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VuaXRyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'Tetouan', image: 'https://images.pexels.com/photos/14860696/pexels-photo-14860696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Volubilis', image: 'https://images.unsplash.com/photo-1642030443225-020c3d03e4de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZvbHViaWxpc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const handleInputChange = (e) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);

    if (newTerm === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = placeSuggestions.filter((place) =>
        place.name.toLowerCase().includes(newTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (place) => {
    setSearchTerm(place.name);
    setSuggestions([]);
    navigate(`/destination/${place.name.toLowerCase()}`);
  };

  const handleSearch = () => {
    if (selectedSuggestion) {
      navigate(`/destination/${selectedSuggestion}`);
    }
  };

  return (
    <div className='heroDes1'>
      <div className='head'>
        <h2>Embark on a Journey through Morocco's Magic</h2>
        <h5 className=''>Discover Morocco's Enchanting Wonders</h5>
      </div>
      <video autoPlay loop muted id='video'>
        <source src={invideo} type='video/mp4' />
      </video>
      <div className="overlay"></div>

      <div className="search-container" ref={searchContainerRef}>
        <div className="search-input-wrapper">
          <SearchOutlinedIcon style={{ marginLeft: '10px', color: 'black' }} />
          <input
            type="text"
            placeholder="Search for a Destination . . ."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((place, index) => (
              <li key={index} onClick={() => handleSuggestionClick(place)}>
                <img src={place.image} alt={place.name} />
                <h6> {place.name} </h6>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DesHero;
