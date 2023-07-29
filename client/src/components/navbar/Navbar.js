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

/* import './NavbarStyles.css' */
import './stylene.css'
import './nave.js'
import { AuthContext } from '../../context/AuthContext'



function Navbar() {
   /*  const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const { user } = useContext(AuthContext); */

   /*  return (
        <div name='home' className={nav ? 'navbar navbar-bg active' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <Link to='/'><h2 style={{color:'black'}}>Moroccool.</h2></Link>
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
                <Link to='/'><BiSearch className='icon' style={{ marginRight: '1rem' }} /></Link>
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
                <Link to='/'><li>Home</li></Link>
                <Link to='/destination'><li>Destinations</li></Link>
                <Link to='/events'><li>Events</li></Link>
                <Link to='/things/cafres'><li>Things To Do</li></Link>
                <Link to=''><li>Book</li></Link>
                </ul>
                <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
            </div>

        </div>
    ) */

  
    return (
        <header class="header">
        <div class="container">
          <div class="wrapper">
            <div class="header-item-left">
              <h1><a href="#" class="brand">Logo</a></h1>
            </div>
            <div class="header-item-center">
              <div class="overlay"></div>
              <nav class="menu">
                <div class="menu-mobile-header">
                  <button type="button" class="menu-mobile-arrow"><KeyboardArrowDownIcon fontSize='small'/></button>
                  <div class="menu-mobile-title"></div>
                  <button type="button" class="menu-mobile-close"><i class="ion ion-ios-close"></i></button>
                </div>
                <ul class="menu-section">
                  <li><a href="#">Home</a></li>
                  <li class="menu-item-has-children">
                    <a href="#">What's New <KeyboardArrowDownIcon fontSize='small'/></a>
                    <div class="menu-subs menu-mega menu-column-4">
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-1.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 1</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-2.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 2</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-3.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 3</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-4.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Category <KeyboardArrowDownIcon fontSize='small'/></a>
                    <div class="menu-subs menu-mega menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Men's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 class="title">Kid's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Women's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 class="title">Health & Beauty</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Home & Lifestyle</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <img src="./asset/image-5.jpg" class="responsive" alt="Shop Product"/>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Articles <KeyboardArrowDownIcon fontSize='small'/></a>
                    <div class="menu-subs menu-column-1">
                      <ul>
                        <li><a href="#">Article One</a></li>
                        <li><a href="#">Article Two</a></li>
                        <li><a href="#">Article Three</a></li>
                        <li><a href="#">Article Four</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Accounts <KeyboardArrowDownIcon fontSize='small'/></a>
                    <div class="menu-subs menu-column-1">
                      <ul>
                        <li><a href="#">Login and Register</a></li>
                        <li><a href="#">Help and Question</a></li>
                        <li><a href="#">Privacy and Policy</a></li>
                        <li><a href="#">Term of Cookies</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div class="header-item-right">
              <a href="#" class="menu-icon"><i class="ion ion-md-search"></i></a>
              <a href="#" class="menu-icon">Login</a>
              <a href="#" class="menu-icon"><i class="ion ion-md-cart"></i></a>
              <button type="button" class="menu-mobile-trigger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Navbar
