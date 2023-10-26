import React, {useState, useRef, useEffect} from 'react'
import DesHero from '../../../components/deshero/DesHero'
import Dest from '../../../components/dest/Dest'
import Navbar from '../../../components/navbar/Navbar'
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"
import Hero from '../../../components/hero/Hero'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './maindes.scss'
import SearchOutlined from '@mui/icons-material/SearchOutlined'


const MainDes = () => {
  
  const placeSuggestions = [
    { name: 'Meknes', image: 'https://images.pexels.com/photos/11642572/pexels-photo-11642572.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Marrakech', image: 'https://images.pexels.com/photos/4502973/pexels-photo-4502973.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Fes', image: 'https://images.pexels.com/photos/3525903/pexels-photo-3525903.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Casablanca', image: 'https://images.pexels.com/photos/12433310/pexels-photo-12433310.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Essaouira', image: '' },
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchContainerRef = useRef(null);

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

    // Filter place suggestions based on the input
    const filteredSuggestions = placeSuggestions.filter((place) =>
      place.name.toLowerCase().includes(newTerm.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <div className='mainDes'>
      <Navbar/>
      <Hero
        img='https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />

      <Dest/> 

      {/* Footer Section */}
      <FooterBanner/>
        <Foot/>
      
    </div>
  )
}

export default MainDes