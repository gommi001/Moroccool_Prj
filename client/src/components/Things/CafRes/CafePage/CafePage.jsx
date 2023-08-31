import React,{useState} from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import HeroDes from '../../../../components/heroDes/HeroDes'
import DescriptionCafe from '../../../../components/DescriptionCafe'
import Featured from '../../../../components/featured/Featured'
import Data from '../../../../components/services/Data'
import Test2 from '../../../../components/menu/Test2'
import CafeMenu from '../../../../components/cafemenu/CafeMenu'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import ScrollToTop from '../../../../components/ScrollToTop'
import useFetch from '../../../../hooks/useFetch'
import { useLocation, useNavigate } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import RouterIcon from '@mui/icons-material/Router';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';


import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LanguageIcon from '@mui/icons-material/Language';
import './cafepage.scss'

import { useParams } from 'react-router-dom';


function CafePage({item}) {


  const [active, setActive]=useState(1)

  const location= useLocation()
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/cafes/find/${id}`);


  const [gallery, setGallery] = useState(false);
  const [menu, setMenu] = useState(false);
  

  return (
    <div>
        <Navbar/>
        
        <div className='heroDes' id='#'>
            <img className='hero_img' src={data.photos}/>
            <div className='content'>
                <h2 style={{textTransform:'capitalize'}}>Welcome To {data.type} {data.name}</h2>
            </div>
        </div>
        
        
        <CafeMenu/>
        <ScrollToTop/>

        {/* Cafe Description , LOGO and Text And Title  */}
      <section className="desc_section">
      <div className="imagedesc">
        <img src={data.logo} alt="choose" />
      </div>
      <div className="content">
        <h3>Why should you Choose Our Restaurant</h3>
        <p>
          {data.description}
        </p>   
      </div>
      </section>
        {/* Ends Here */}

        {/* Pictures , Location and Map Section */}
        <div className='featured'>
            <h1 className='featured-text'>{data.name}</h1>
            <h6 className='featured-text'>Pictures and Services Available</h6>
            <div className='container'>
            {data.photos?.length > 0 && (
              <>
                <img className='span-3 image-grid-row-2' src={data.photos[3]} alt='' />
              </>
            )}
            {data.photos?.slice(0, 3).map((photo, i)=> ( 
                <>
                  <img key={i} src={photo} alt='' />
                </>
            ))}
                <div className="ff" onClick={() => setGallery(!gallery)}>
                {data.photos?.length > 0 && (
                <>
                  <img className="ffff" src={data.photos[3]} alt=''  />
                  <div class="centered">Show More...</div>
                </>
            )}
                </div>
                                                     
                <FsLightbox
				    toggler={gallery}
				    sources={data.photos}
			    />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2><FmdGoodIcon fontSize='large'/>{data.location}</h2>
                        <hr/>
                        <div className="secsocial">
                                <a href={``}><FaFacebook fontSize="xx-large" className='face' /></a>
                                <FaInstagram fontSize="xx-large" className='insta' />{data.instagram}
                                <a href={`https://www.tiktok.com/@${data.twitter}`}><FaTwitter fontSize="xx-large" className='twitter' /></a>
                                <a href={`https://www.tiktok.com/@${data.tiktok}`}><FaTiktok fontSize="xx-large" className='tiktok'/></a>                
                        </div>
                        <hr/>
                        <h6><AttachEmailIcon fontSize="large"/> {data.phone} </h6>
                        <hr/>        
                        <h6><LanguageIcon fontSize="large" /> {data.website} </h6>                      
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <br/>
                    <br/>
                    <div className='iframe'>
                        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen="true"
              aria-hidden="false"
              tabIndex="0"
            />
                    </div>
                </div>                
            </div>
        </div>
        {/* Ends Here */}

        {/* Services Section */}
        <>
        <h2 className='heading'>More Informations</h2>
          <div className="table">      
              <table>
                <tr>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
                {data.services?.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td className='sername'>{item}</td>
                      <td><DoneIcon className='done'/></td>
                    </tr>
                  )
                })}
              </table>
          </div>
        </>
        {/* Services Section Ends Here */}

        {/* {/* Menu Section   */}
        <div>          
            <h2 className='heading'>Restaurant Menu</h2>
           
              <img style={{ cursor:'pointer',maxWidth:300 }} src='https://images.unsplash.com/photo-1515697320591-f3eb3566bc3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVudSUyMGNhZmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60'  onClick={() => setMenu(!menu)}/>
                                     
          
       
          <FsLightbox
				    toggler={menu}
				    sources={data.menu}
			    />  
    </div>
        {/* Menu Section Ends Here*/} 



        <FooterBanner/>
        <Foot/>   
        
    </div>
  )
}

export default CafePage