import React, { useState, useContext, useEffect } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link } from 'react-router-dom';

import './navStyle.css';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/moroccol_logo.png'

function Navbar({ activeTab, setActiveTab }) {
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
                                <Link to='/things/cafes'>Cafe & Restaurant</Link>
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
                <Link to='/things/cafes'><li>Things To Do</li></Link>
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

    const { user } = useContext(AuthContext);

    let letter1 = '';
let letter2 = '';

// Check if user is defined before accessing properties
if (user && user.username) {
  const arr = user.username;
  // Show only the first two letters
  letter1 = arr.charAt(0);
  letter2 = arr.charAt(1);
} else {
  
}

    const handleLogout = () => {
      // Clear user data (e.g., authentication tokens)
      // ...
  
      // Clear local storage
      localStorage.clear();
  
      // Redirect to the login page or home page
      window.location.href = '/'; // Replace with the appropriate URL
    };

    // Mui5 Tabs Links
    const handleNavItemClick = (dataId) => {
      setActiveTab(dataId); // Set the activeTab based on the data-id attribute
    };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

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
                <img src={logo} alt='Logo' id='imageLogo'/>
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
                  <a href="/">Home</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">
                    New <KeyboardArrowDownIcon fontSize='small'/>
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
                  <a>
                    Things To Do <KeyboardArrowDownIcon fontSize='small'/>
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                       <a href='/things/hotels/'><h4 class="title">Hotels</h4></a> 
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
                      <a href='/things/cafes/'><h4 class="title">Cafes & Restaurants</h4></a>  
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
                      </ul>
                    </div>
                    <div class="list-item">
                      <a href='/events/'><h4 class="title">Events</h4></a>
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
                      <img src="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="shop" />
                    </div>
                  </div>
                </li>
                
                <li class="menu-item-has-children">
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
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="header-item item-right">
            {user ? 
            <div className='avatar'>
               <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
               <Tooltip title="Account settings">
                 <IconButton
                   onClick={handleClick}
                   size="small"
                   sx={{ ml: 2 }}
                   aria-controls={open ? 'account-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                 >
                   <Avatar sx={{ width: 40, height: 40, textTransform:"capitalize" }}> {letter1}{letter2} </Avatar>
                 </IconButton>
               </Tooltip>
             </Box>
             <Menu
               anchorEl={anchorEl}
               id="account-menu"
               open={open}
               onClose={handleClose}
               onClick={handleClose}
               PaperProps={{
                 elevation: 0,
                 sx: {
                   overflow: 'visible',
                   filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                   mt: 1.5,
                   '& .MuiAvatar-root': {
                     width: 32,
                     height: 32,
                     ml: -0.5,
                     mr: 1,
                   },
                   '&:before': {
                     content: '""',
                     display: 'block',
                     position: 'absolute',
                     top: 0,
                     right: 14,
                     width: 10,
                     height: 10,
                     bgcolor: 'background.paper',
                     transform: 'translateY(-50%) rotate(45deg)',
                     zIndex: 0,
                   },
                 },
               }}
               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
             >
               <MenuItem onClick={handleClose}>
                 <Avatar /> {user.username}
               </MenuItem>
               <MenuItem onClick={handleClose}>
                 <Avatar /> {user.email}
               </MenuItem>
               <Divider />
               <MenuItem onClick={handleClose}>
                 <ListItemIcon>
                   <FavoriteIcon style={{color:'#FD1D1D'}} fontSize="medium" />
                 </ListItemIcon>
                 Liked Content
               </MenuItem>
               <MenuItem onClick={handleClose}>
                 <ListItemIcon>
                   <Settings fontSize="small" />
                 </ListItemIcon>
                 Settings
               </MenuItem>
               <MenuItem onClick={handleLogout}>
                 <ListItemIcon>
                   <Logout fontSize="small" />
                 </ListItemIcon>
                 Logout
               </MenuItem>
             </Menu>
             </div>
            
            : ( <a href="/login">
              <button className='btn_nav'>Login</button>
            </a>
            )}

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
