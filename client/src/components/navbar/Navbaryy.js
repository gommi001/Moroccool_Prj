import React, { useState, useContext, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link } from 'react-router-dom';

import './navStyle.css';

import { AuthContext } from '../../context/AuthContext';

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
                    </li>                        </div>

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

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const menu = document.querySelector('.menu');
    const menuMain = menu.querySelector('.menu-main');
    const goBack = menu.querySelector('.go-back');
    const menuTrigger = document.querySelector('.mobile-menu-trigger');
    const closeMenu = menu.querySelector('.mobile-menu-close');
    let subMenu;

    function toggleMenu() {
      menu.classList.toggle('active');
      document.querySelector('.menu-overlay').classList.toggle('active');
    }

    function showSubMenu(hasChildren) {
      subMenu = hasChildren.querySelector('.sub-menu');
      subMenu.classList.add('active');
      subMenu.style.animation = 'slideLeft 0.5s ease forwards';
      const menuTitle =
        hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
      menu.querySelector('.current-menu-title').innerHTML = menuTitle;
      menu.querySelector('.mobile-menu-head').classList.add('active');
    }

    function hideSubMenu() {
      subMenu.style.animation = 'slideRight 0.5s ease forwards';
      setTimeout(() => {
        subMenu.classList.remove('active');
      }, 300);
      menu.querySelector('.current-menu-title').innerHTML = '';
      menu.querySelector('.mobile-menu-head').classList.remove('active');
    }

    menuMain.addEventListener('click', (e) => {
      if (!menu.classList.contains('active')) {
        return;
      }
      if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
      }
    });

    goBack.addEventListener('click', () => {
      hideSubMenu();
    });

    menuTrigger.addEventListener('click', () => {
      toggleMenu();
    });

    closeMenu.addEventListener('click', () => {
      toggleMenu();
    });

    document.querySelector('.menu-overlay').addEventListener('click', () => {
      toggleMenu();
    });

    window.onresize = function () {
      if (this.innerWidth > 991) {
        if (menu.classList.contains('active')) {
          toggleMenu();
        }
      }
    };

    const handleScroll = () => {
      // If the vertical scroll position is greater than 0, set scrolling to true
      // Otherwise, set it to false
      setScrolling(window.scrollY > 0);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header ${scrolling ? 'scrolled' : ''}`}>
      <div class="container">
        <div class="row v-center">
          <div class="header-item item-left">
            <div class="logo">
              <a href="/">
                <img src={'./mainLogo.png'} alt="Logo" id="imageLogo" />
              </a>
            </div>
          </div>

          <div class="header-item item-center">
            <div class="menu-overlay"></div>
            <nav class="menu">
              <div class="mobile-menu-head">
                <div class="go-back">
                  <i class="fa fa-angle-left"></i>
                </div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="menu-main">
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    New <KeyboardArrowDownIcon fontSize="small" />
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p1.jpg" alt="new Product" />
                        <h4 class="title">Product 1</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p2.jpg" alt="new Product" />
                        <h4 class="title">Product 2</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p3.jpg" alt="new Product" />
                        <h4 class="title">Product 3</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="img/p4.jpg" alt="new Product" />
                        <h4 class="title">Product 4</h4>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    Things To Do <KeyboardArrowDownIcon fontSize="small" />
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <h4 class="title">Men's Fashion</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                      <h4 class="title">Beauty</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <h4 class="title">Women's Fashion</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                      <h4 class="title">Furniture</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <h4 class="title">Home, Kitchen</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <img src="img/shop1.jpg" alt="shop" />
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    Blog <KeyboardArrowDownIcon fontSize="small" />
                  </a>
                  <div class="sub-menu single-column-menu">
                    <ul>
                      <li>
                        <a href="#">Standard Layout</a>
                      </li>
                      <li>
                        <a href="#">Grid Layout</a>
                      </li>
                      <li>
                        <a href="#">single Post Layout</a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li class="menu-item-has-children">
                  <a href="#">
                    Pages <KeyboardArrowDownIcon fontSize='small'/>
                  </a>
                  <div class="sub-menu single-column-menu">
                    <ul>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Register</a>
                      </li>
                      <li>
                        <a href="#">Faq</a>
                      </li>
                      <li>
                        <a href="#">404 Page</a>
                      </li>
                    </ul>
                  </div>
                </li> */}
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="header-item item-right">
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
            <a href="#">
              <i class="far fa-heart"></i>
            </a>
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>

            <div class="mobile-menu-trigger">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
