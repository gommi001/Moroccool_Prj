import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

  const location = useLocation();

  
  const pagesWithDropdown = [
    '/destination/meknes', 
    '/destination/marrakech', 
    '/destination/casablanca', 
    '/destination/essaouira', 
    '/destination/fes',
    '/destination/agadir',
    '/destination/chefchaouen',
    '/destination/ifrane',
    '/destination/kenitra',
    '/destination/rabat',
    '/destination/tanger',
    '/destination/tetouan',
    '/destination/asilah',
    '/destination/hoceima',
    '/destination/eljadida',
  ];
  
  const pageImages = {
    '/destination/meknes': 'https://images.pexels.com/photos/16434656/pexels-photo-16434656/free-photo-of-light-people-art-photographer.jpeg?auto=compress&cs=tinysrgb&w=600',
    '/destination/marrakech': 'https://images.pexels.com/photos/13766875/pexels-photo-13766875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    '/destination/casablanca': 'https://images.pexels.com/photos/9146740/pexels-photo-9146740.jpeg?auto=compress&cs=tinysrgb&w=600',
    '/destination/essaouira': 'https://images.pexels.com/photos/10727341/pexels-photo-10727341.jpeg?auto=compress&cs=tinysrgb&w=600',
    '/destination/fes': 'https://images.pexels.com/photos/15188458/pexels-photo-15188458/free-photo-of-facade-of-a-building-with-drying-fabrics-in-fez-marocco.jpeg?auto=compress&cs=tinysrgb&w=600',
    '/destination/agadir': 'https://images.unsplash.com/photo-1638575983086-58cc727a684e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFnYWRpcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    '/destination/chefchaouen': 'https://images.unsplash.com/photo-1553693611-679795ed7eb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZmNoYW91ZW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60',
    '/destination/ifrane': 'https://images.unsplash.com/photo-1588168079988-fee222d6faf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXRsYXMlMjBtb3JvY2NvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    '/destination/kenitra': 'https://images.pexels.com/photos/3525903/pexels-photo-3525903.jpeg?auto=compress&cs=tinysrgb&w=600',
    '/destination/rabat': 'https://images.unsplash.com/photo-1627674048096-c7b3e6eb4dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhYmF0fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    '/destination/tanger': 'https://images.unsplash.com/flagged/photo-1555169048-be3ce0310b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZ2VyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    '/destination/tetouan': 'https://images.pexels.com/photos/14860696/pexels-photo-14860696.jpeg?auto=compress&cs=tinysrgb&w=600',
    '/destination/asilah': 'https://images.pexels.com/photos/12367481/pexels-photo-12367481.jpeg?auto=compress&cs=tinysrgb&w=600',
    '/destination/hoceima': 'https://images.unsplash.com/photo-1654980475688-d36d8852d48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsJTIwaG9jZWltYXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    '/destination/eljadida': '',
  };

  const cityData = {
    "Major Cities": [
      { name: "Casablanca", image: "https://images.pexels.com/photos/4359016/pexels-photo-4359016.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Marrakech", image: "https://images.pexels.com/photos/4220977/pexels-photo-4220977.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Rabat", image: "https://images.pexels.com/photos/12504063/pexels-photo-12504063.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { name: "Agadir", image: "https://images.unsplash.com/photo-1536868313473-7480e7c169f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdhZGlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    ],
    "Mountainous Cities": [
      { name: "Chefchaouen", image: "https://images.unsplash.com/flagged/photo-1555169048-3c4845cfcf1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZmNoYW91ZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
      { name: "Ifrane", image: "https://images.unsplash.com/photo-1611358382200-5baf13de1b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWZyYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
      { name: "Azrou", image: "" },
    ],
    "Historical Cities": [
      { name: "Meknes", image: "https://media.istockphoto.com/id/1201510816/fr/photo/ancienne-porte-et-murs-de-bab-el-mansour-%C3%A0-meknes-maroc-afrique-du-nord.jpg?s=612x612&w=0&k=20&c=690WzP1IH615AfTwkvy3fF7FAaMyKsFtSwu0N_czXHc=" },
      { name: "Fes", image: "https://media.istockphoto.com/id/652289056/fr/photo/mosqu%C3%A9e-%C3%A0-la-porte-de-bab-guissa-%C3%A0-f%C3%A8s-maroc.jpg?s=612x612&w=0&k=20&c=8vqPWAIN5Ac2D4GgSAKhvH5AHA5swG7QCMpT-qe08RI=" },
      { name: "Volubilis", image: "https://media.istockphoto.com/id/1244891582/fr/photo/ancienne-ville-de-volubilis.jpg?s=612x612&w=0&k=20&c=g8ZcvqUa8t0d3L1pS_BgGpsXcK82-fKpL76XDh0lArg=" },
    ],
    "Coastal Cities": [
      { name: "Tanger", image: "https://media.istockphoto.com/id/1334492948/fr/photo/vue-de-dessus-du-d%C3%A9troit-de-gibraltar-%C3%A0-tanger-maroc.jpg?s=612x612&w=0&k=20&c=Wk5lZOGddW7fObLX6ABQFypprvusJsMT3lmh6VnYeBQ=" },
      { name: "Al Hoceima", image: "https://images.unsplash.com/photo-1660972288441-18e89c4ec325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWwlMjBob2NlaW1hfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
      { name: "Agadir", image: "https://media.istockphoto.com/id/911049574/fr/photo/chameau-avec-les-touristes-%C3%A0-agadir-le-03-janvier-2018-au-maroc.jpg?s=612x612&w=0&k=20&c=DNz1sXevenE-S16Sq8QfDeiXixkRcYmfOA8CoFxNuk0=" },
      { name: "Essaouira", image: "https://media.istockphoto.com/id/1396534519/fr/photo/vue-de-la-m%C3%A9dina-dessaouira-au-maroc-mouettes-au-dessus-de-la-vieille-ville-contre-le-ciel.jpg?s=612x612&w=0&k=20&c=2OQ85RQhpZsuFdctJxUemRq827B-3dkdG8Hp_pRqqdw=" },
    ],
  };

  const [hoveredCity, setHoveredCity] = useState(null);

      // Function to handle city hover
      const handleCityHover = (city) => {
        setHoveredCity(city);
      };

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


                {pagesWithDropdown.includes(location.pathname) && (
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
                          <img
                            src={pageImages[location.pathname]}
                            alt="Things To Do"
                            className="things-to-do-image"
                          />
                        </div>
                      </div>
                    </li>
                )}


                <li class="menu-item-has-children">
                  <a>
                    Destinations <KeyboardArrowDownIcon fontSize='small'/>
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                  {Object.entries(cityData).map(([category, cities], index) => (
                    <div class="list-item" key={index}>
                      <a href={``}>
                        <h4 class="title">{category}</h4>
                      </a>
                      <ul>
                        {cities.map((city, cityIndex) => (
                          <li key={cityIndex}>
                            <a
                              href="#"
                              onMouseEnter={() => handleCityHover(city)}
                            >
                              {city.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    ))}

                    {hoveredCity && (
                      <div class="list-item">
                        <img src={hoveredCity.image} alt={hoveredCity.name} />
                      </div>
                    )}
                  </div>
                </li>

                <li class="menu-item-has-children">
                  <a href="#">
                    Discover <KeyboardArrowDownIcon fontSize='small'/>
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item text-center">
                      <a href="/transport">
                        <img className='discover_img' src="https://img.medi1tv.com/boraq5_151118.jpg" alt="new Product" />
                        <h4 class="title">Transport</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img className='discover_img' src="https://media.istockphoto.com/id/1290578898/photo/morocco-flag-in-the-courtyard-of-mosque-hassan-ii-in-casablanca-morocco.jpg?s=612x612&w=0&k=20&c=u1LEwKXblDljx8UvW2NbQZVqAC5eVUkxGkUZVPJEyuA=" alt="new Product" />
                        <h4 class="title">Histoire et Culture</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="/shopping">
                        <img className='discover_img' src="https://media.istockphoto.com/id/978955830/photo/typical-souk-market-in-the-medina-of-marrakech-morocco.jpg?s=612x612&w=0&k=20&c=2eNTkUyGFuqRT6s9o-gY_WlGl13bhwoT7oNbMV9OJqY=" alt="new Product" />
                        <h4 class="title">Shopping</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="/museums">
                        <img className='discover_img' src="https://www.visitmorocco.com/sites/default/files/le-musee-mohammed-vi.jpg" alt="new Product" />
                        <h4 class="title">Museums</h4>
                      </a>
                    </div>  
                  </div>
                </li>
                

                <li>
                  <a href='/about'>About Us</a>
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
