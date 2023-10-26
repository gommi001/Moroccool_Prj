// Inside the Lightbox component

import React from 'react';
import PropTypes from 'prop-types';
import MuseumSlider from '../museumSlider/MuseumSlider';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import PhoneIcon from '@mui/icons-material/Phone'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './lightbox.scss';

const Lightbox = ({ images, onClose, currentIndex, onNext, onPrev, museumData }) => {
  const { name, horaires, telephone, tarifs, location } = museumData;

  // Split the tarifs string into an array of individual tarifs
  const tarifsArray = tarifs.split(', ');

  return (
    <div className="lightbox-container" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header" style={{ backgroundColor: '#e22020', color: 'white', padding: '10px', textAlign: 'center' }}>
          <h3>{name}</h3>
          <span className="lightbox-close" onClick={onClose}>&times;</span>
        </div>
        <div className="lightbox-body">
          <MuseumSlider className="museum-slider" images={images} onImageClick={() => {}} />
        </div>
        <h2 className='details_title'>Informations Pratique</h2>
        <div className="museum-details">
          <h4>
            <AccessTimeIcon fontSize='large'/> Horaires :
          </h4>
          <p>{horaires}</p>
          <h4>
            <PhoneIcon fontSize='large'/> Téléphone :
          </h4>
          <p>{telephone}</p>
          <h4>
            <LocalOfferIcon fontSize='large'/> Tarifs :
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tarifsArray.map((tarif, index) => (
              <li key={index} style={{color:'#666', fontWeight:'600'}}>
                <CheckCircleOutlineIcon style={{ color: '#e22020', marginRight: '5px'}} /> {tarif}
              </li>
            ))}
          </ul>
          <h4>
            <LocationOnIcon fontSize='large'/> Venir au musée (Location) :
          </h4>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  museumData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    horaires: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    tarifs: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Lightbox;
