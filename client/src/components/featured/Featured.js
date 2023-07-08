import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import './Featured.scss'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LanguageIcon from '@mui/icons-material/Language';

import useFetch from "../../hooks/useFetch";



const Featured = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

    const { data, loading, error } = useFetch(`/hotels/find/${id}`);

    return (
<>
        
        <div className='featured'>
            <h1 className='featured-text'>{data.title}</h1>
            <h3 className='featured-text'>Pictures and Services Available</h3>
            <div className='container'>
            {/* {data.photos?.map((photo, i) => ( */} 
                <>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <div className="ff" onClick={() => setToggler(!toggler)}>
                    <img className="ffff" src={Bathroom} alt=''  />
                    <div class="centered">Show More...</div>
                </div>
                </>
                                                     

                <FsLightbox
				    toggler={toggler}
				    sources={[
					'https://images.unsplash.com/photo-1627307016660-c7217d815b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZSUyMHJlc3RhdXJhbnQlMjBtYXJvY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
					'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZSUyMHJlc3RhdXJhbnQlMjBtYXJvY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
					'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    'https://images.unsplash.com/photo-1628394029748-3bbbc88a4334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZSUyMHJlc3RhdXJhbnQlMjBtYXJvY3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
				    ]}
			    />

                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2><FmdGoodIcon fontSize='large'/>{data.location}</h2>
                        <hr/>
                        <div className="secsocial">
                                <FaFacebook fontSize="xx-large" className='face' />
                                <FaInstagram fontSize="xx-large" className='insta' />
                                <FaTwitter fontSize="xx-large" className='twitter' />
                                <FaTiktok fontSize="xx-large" className='tiktok'/>
                    
                        </div>
                        <hr/>
                        <h6><AttachEmailIcon fontSize="large"/> Contact by email</h6>

                        <hr/>
        
                        <h6><LanguageIcon fontSize="large" /> Restaurant Website...</h6>
                        
                      
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
     
      </>
    )
}

export default Featured
