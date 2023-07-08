import React, { useState, useContext } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Link} from 'react-router-dom'

import './NavbarStyles.css'
import { AuthContext } from '../../context/AuthContext'



function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const { user } = useContext(AuthContext);

    return (
        <div name='home' className={nav ? 'navbar navbar-bg active' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Morocco Tours</h2>
            </div>
            <ul className="nav-menu">
                <Link to='/'><li>Home</li></Link>
                <Link to=''>
                    <li>
                        <div class="dropdown">
                            <Link to='/destination'> <span class="dropbtn">Destinations <KeyboardArrowDownIcon fontSize='small'/></span> </Link>
                            <div class="dropdown-content">
                                <Link to='/destination/meknes'> Meknes </Link>
                                <Link to='/destination/marrakech'> Marrakech </Link>
                                <Link to='/destination/casablanca'> Casablanca </Link>
                                <Link to='/destination/rabat'> Rabat </Link>
                                <Link to='/destination/fes'> Fes </Link>
                                <Link to='/destination/essaouira'> Essaouira </Link>
                                <Link to='/destination/tangier'> Tangier </Link>
                            </div>
                        </div>
                    </li>
                </Link>

                <Link to='/events'><li>Events</li></Link>
                
                <Link to='find'>
                    <li>
                    <div class="dropdown">
                            <span class="dropbtn">Things To Do <KeyboardArrowDownIcon fontSize='small'/></span>
                            <div class="dropdown-content">
                                <Link to='/things/hotels'>Hotels <FiberNewOutlinedIcon className='nav_icon' /> </Link>
                                <Link to='/things/cafres'>Cafe & Restaurant</Link>
                                <Link to='/things/programs'>Programs</Link>
                                <Link to='/things/trip'>Hire a Trip</Link>
                            </div>
                        </div>
                    </li>
                </Link>
                <Link to='views'>
                    <li>
                    <div class="dropdown">
                            <span class="dropbtn">Book</span>
                            <div class="dropdown-content">
                                <a to=''>Book a Trip <FiberNewOutlinedIcon className='nav_icon' /> </a>
                                <a to=''>Book a Car</a>
                                <a to=''>Book a Taxi</a>
                            </div>
                        </div>
                    </li>
                </Link>

                <Link to='/about'><li>About Us</li></Link>


            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <div class="dropdown">
                            <span class="dropbtn"><LanguageOutlinedIcon className='icon' style={{ marginRight: '1rem' }} /></span>
                            <div class="dropdown-content">
                                <a>English - en</a>
                                <a>Arabic - ar</a>
                                <a>Francais - fr</a>
                                <a>Deutsch - de</a>
                                <a>Espanol - es</a>
                            </div>
                </div>  
                
            </div>

            


             <Link to='/login'><button className='btn_nav'>Login</button></Link>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home'><li>Home</li></Link>
                <Link to='/destination'><li>Destinations</li></Link>
                <Link to='/events'><li>Events</li></Link>
                <Link to='search'><li>Things To Do</li></Link>
                <Link to='views'><li>Book</li></Link>
                </ul>
                
            </div>

        </div>
    )
}

export default Navbar
