import React, {useState} from 'react';
import FsLightbox from "fslightbox-react";

import styled from "styled-components";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './menu.scss'
import logo from '../../assets/logo11.png'




export default function TemporaryDrawer() {
  
      	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

  return (
      <div>          

            <h2 className='heading'>Restaurant Menu</h2>
           
              <img style={{ cursor:'pointer',maxWidth:300 }} src='https://images.unsplash.com/photo-1515697320591-f3eb3566bc3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVudSUyMGNhZmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60'  onClick={() => setToggler(!toggler)}/>
                                     
          
       
          <FsLightbox
				    toggler={toggler}
				    sources={[
					'https://images.unsplash.com/photo-1627307016660-c7217d815b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZSUyMHJlc3RhdXJhbnQlMjBtYXJvY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
					'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZSUyMHJlc3RhdXJhbnQlMjBtYXJvY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
					'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          'https://images.unsplash.com/photo-1628394029748-3bbbc88a4334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZSUyMHJlc3RhdXJhbnQlMjBtYXJvY3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
				    ]}
			    />
      
    </div>
  );
}


const Section = styled.section`
  cursor:pointer;
  height: 16rem;
  width: 100%;
  margin: 5rem 0;
  background: linear-gradient(to right, #e22020, #d84141a2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  position: relative;
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
        color:white;
      font-size: 3rem;
      width: 60%;
    }
    .downloads {
      display: flex;
      gap: 1rem;
      img {
        height: 3rem;
        cursor: pointer;
      }
    }
  }
  .screens {
    height: 22rem;
    position: absolute;
    bottom: -2rem;
    right: 1rem;
  }
  .btn{
    border : solid white;
    color : white;
  }
  .btn:hover{
    border : solid #e22020;
    transform: scale(1.5);
    transition: all 0.3s ease-in-out 0.2s;
    font-weght : bold;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    gap: 4rem;
    padding: 2rem;
    .info {
      h1 {
        font-size: 2rem;
        width: 100%;
      }
    }
    .screens {
      position: initial;
      height: 15rem;
    }
  }
`;