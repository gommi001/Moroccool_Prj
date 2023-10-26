// Museums.jsx

import React, {useState} from 'react';
import { Typography } from '@mui/material';
import MuseumSlider from './museumSlider/MuseumSlider'; // You can replace this with your actual slider component
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Make sure you have this MUI5 icon
import Lightbox from './lightbox/Lightbox';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import './museums.scss';


const Museums = () => {
  

  const museumsData = [
    {
      name: "Musée Mohammed VI d’Art Moderne et Contemporain",
      description: "Inauguré par Sa Majesté le Roi Mohammed VI en octobre 2014, le Musée Mohammed VI d’art moderne et contemporain (MMVI) est la première institution muséale dans le Royaume à se consacrer entièrement aux arts moderne et contemporain et également la première institution publique à répondre aux normes muséographiques internationales.",
      images: [
        "https://fnm.ma/wp-content/uploads/2022/02/IMG_5201-copie-scaled.jpg",
        "https://fnm.ma/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-06-03-a%CC%80-15.53.42.png",
        "https://fnm.ma/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-06-03-a%CC%80-15.57.24.png",
      ],
      city: "Rabat",
      link:"/destination/rabat",
      horaires: 'Ouvert du lundi au dimanche, de 10h à 18h. Fermé mardi',
      telephone: '+212 (0) 5 37 76 90 47',
      tarifs: '30 dh pour les adultes marocains, 15 dh pour les marocains de moins de 18 ans , 60 dh pour les étrangers',
      location: 'Musée Mohammed VI Angle Avenue Moulay Hassan et avenue Moulay Abdellah Rabat',
    },

    {
      name: "Musée des Confluences Dar El Bacha",
      description: "Musée des Confluences Dar El Bacha is a museum in Marrakech, Morocco. It showcases a rich collection of artifacts and exhibits related to the cultural and historical heritage of the region. The museum is located in the historic Dar El Bacha palace, offering visitors a glimpse into Morocco's vibrant past.",
      images: [
        "https://fnm.ma/wp-content/uploads/2021/12/darbacha-musee.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/darbacha-1.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/darbacha-03.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/darbacha-02-1024x683.jpg"
        
      ],
      city: "Marrakech",
      link: "/destination/marrakech",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "MUSÉE LA KASBAH DES CULTURES MÉDITERRANÉENNES",
      description: "Le Musée la Kasbah des cultures méditerranéennes représente un lieu patrimonial incontournable et une partie importante de la mémoire collective méditerranéenne. Il compte également parmi les plus anciennes institutions culturelles témoignant de la richesse et de la diversité du bassin méditerranéen.",
      images: [
        "https://fnm.ma/wp-content/uploads/2021/12/lakasbah-musee.jpg",
        " https://fnm.ma/wp-content/uploads/2021/12/kasbah6.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/kasbah1.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/kasbah7.jpg",
        
      ],
      city: "TANGER",
      link: "/destination/tanger",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "MUSÉE NATIONAL DE LA CÉRAMIQUE",
      description: "Crée en 1990, le Musée National de la Céramique a été récupéré par la Fondation Nationale des Musées en 2018 et compte aujourd’hui parmi les musées marocains de renom grâce à la richesse et la diversité de sa collection constituée essentiellement de poterie et de céramique du Maroc. Plus de 600 objets y sont conservés, étudiés, et pour une grande part, présentés au public.",
      images: [
       "https://fnm.ma/wp-content/uploads/2021/12/11.jpg" , 
        "https://fnm.ma/wp-content/uploads/2021/12/02.jpg" , 
        "https://fnm.ma/wp-content/uploads/2021/12/13.jpg" , 
        "https://fnm.ma/wp-content/uploads/2021/12/04.jpg"
        
      ],
      city: "Safi",
      link: "/destination/",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "MUSÉE BAB EL OQLA",
      description: "Situé à l’est de l’ancienne médina, le Musée Bab El Oqla, dont son nom est dérivé d’une des sept portes historiques de Tétouan, est un espace de rencontres et d’échanges, une ouverture à la découverte de la richesse historique et culturelle de la ville de Tétouan, inscrite au patrimoine mondial de l’Unesco et qui se situe au carrefour de nombreuses confluences. Fondé en 1928,",
      images: [
        "https://fnm.ma/wp-content/uploads/2022/09/Musee-Bab-Oqla-Tetouan_67-scaled.jpg",
        "https://fnm.ma/wp-content/uploads/2022/03/Musee-Bab-Oqla-Tetouan_36-scaled.jpg",
        "https://fnm.ma/wp-content/uploads/2022/03/Musee-Bab-Oqla-Tetouan_42-1024x683.jpg",
        "https://fnm.ma/wp-content/uploads/2022/03/Musee-Bab-Oqla-Tetouan-1024x683.jpg"
        
      ],
      city: "Tetouan",
      link: "/destination/tetouan",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "DAR JAMAÏ, MUSÉE NATIONAL DE LA MUSIQUE",
      description: "Dar Jamaï est une résidence palatiale construite en 1882 (1299 de l’hégire). Une inscription sur plâtre se trouvant à la salle de réception témoigne concrètement de la date de construction. Cette vaste demeure appartenait à Mohamed Ben Larbi Jamaï, grand vizir du Sultan Moulay Hassan 1er (1873 – 1894).",
      images: [
        "https://fnm.ma/wp-content/uploads/2022/09/Musee-Dar-Jamai087-scaled.jpg",
        "https://fnm.ma/wp-content/uploads/2022/05/Musee-Dar-Jamai028-1536x1024.jpg",
        "https://fnm.ma/wp-content/uploads/2022/03/7-1024x768.jpeg"
        
      ],
      city: "Meknes",
      link: "/destination/meknes",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "OUDAYAS, MUSÉE NATIONAL DE LA PARURE",
      description: "Le musée des Oudayas est l’un des premiers musées crées au Maroc, il tire son nom du fait de son implantation dans la Kasbah des Oudayas, haut lieu de l’histoire du Maroc. La Kasbah des Oudayas et le musée se situent au nord-est de la ville de Rabat. Elle domine l’estuaire en entretenant des liens forts avec le fleuve et l’embouchure du Bouregreg. La Kasbah fut le premier noyau urbain de Rabat.",
      images: [
        "https://fnm.ma/wp-content/uploads/2023/01/IMG20230109160730-1536x1152.jpg",
        "https://fnm.ma/wp-content/uploads/2023/01/IMG20230109144453-1536x1152.jpg",
        "https://fnm.ma/wp-content/uploads/2023/01/IMG20230109160507-1536x1152.jpg ",
        "https://fnm.ma/wp-content/uploads/2023/01/IMG20230109144238-1536x1152.jpg"
        
      ],
      city: "Rabat",
      link: "/destination/rabat",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "JAMAÂ EL-FNA, MUSÉE DU PATRIMOINE IMMATÉRIEL",
      description: "A Marrakech, sur la mythique place Jamaa El Fna, la première agence de la Banque d’État du Maroc fut construite en 1922. Les deux architectes Auguste Cadet et Edmond Brion conçurent un bâtiment qui s’insère parfaitement parmi les édifices de la place. Le musée Jamaa El Fna du Patrimoine Immatériel s’inscrit dans la stratégie de la restauration et la réhabilitation menée par la Fondation Nationale des Musées. En 2008, l’UNESCO a classé la place Jamaa El Fna, patrimoine culturel immatériel de l’Humanité.",
      images: [
        "https://fnm.ma/wp-content/uploads/2023/03/Musee-Jamaa-Elfna-_7-1536x1024.jpg ",
        "https://fnm.ma/wp-content/uploads/2023/03/Musee-Jamaa-Elfna-_86-1536x1024.jpg",
        "https://fnm.ma/wp-content/uploads/2023/03/Musee-Jamaa-Elfna-_47-1536x1024.jpg",
        "https://fnm.ma/wp-content/uploads/2023/03/Musee-Jamaa-Elfna-_25-1536x1024.jpg"
        
      ],
      city: "Marrakech",
      link: "/destination/marrakech",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "DAR SI SAID MUSÉE NATIONAL DU TISSAGE ET DU TAPIS",
      description: "Dar Si Saïd est une grande demeure palatiale construite dans la deuxième moitié du XIXe siècle à l’initiative de Si Saïd Ben Moussa, qui occupait la fonction de ministre de Guerre sous la régence du sultan Alaouite Moulay Abdelaziz (1894-1908) et qui appartenait à une grande famille de renom.",
      images: [
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Dar-Si-Said10-1024x683.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Dar-Si-Said3-1024x683.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Dar-Si-Said6-1024x683.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/dar-si-said-slide3.jpg"
        
      ],
      city: "Marrakech",
      link: "/destination/marrakech",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "MUSÉE NATIONAL DE LA PHOTOGRAPHIE",
      description: "Situé à mi-chemin entre le phare de Rabat et l’ancien hôpital militaire, le Fort Rottembourg, Fort Hervé ou encore Borj El Kebir, est une fortification érigée à la fin du 19ème siècle sur la corniche de Rabat afin d’abriter deux canons de 30 tonnes venus d’Hambourg et offerts par les Allemands.",
      images: [
        "https://fnm.ma/wp-content/uploads/2021/11/pic-112-1-1536x1024-1.jpg",
        "https://fnm.ma/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-08-24-a%CC%80-11.03.03.png",
        "https://fnm.ma/wp-content/uploads/2021/11/Capture-de%CC%81cran-2021-08-24-a%CC%80-11.02.38.png",
        
      ],
      city: "Rabat",
      link: "/destination/rabat",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "MUSÉE VILLA HARRIS",
      description: "Plus qu’un simple musée, Villa Harris est une bâtisse historique qui fut, au siècle dernier, le théâtre d’un passé fastueux dans un Tanger alors en ébullition et au cœur des enjeux internationaux. Imaginée et construite à la fin du XIXe siècle par le britannique Walter Burton Harris, journaliste – envoyé spécial du journal The Times, la villa siège face à la Méditerranée, mère de nombreuses civilisations. La villa a résisté au temps, aux guerres et aux occupations pour être, aujourd’hui, le témoin d’un riche héritage culturel et patrimonial légué aux générations futures.",
      images: [
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Villa-Harris6.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Villa-Harris5-1024x683.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Villa-Harris2.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Villa-Harris7.jpg",
        
      ],
      city: "Tanger",
      link: "/destination/tanger",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "MUSÉE LA KASBAH, ESPACE D'ART CONTEMPORAIN",
      description: "Situé dans l’enceinte de l’ancienne prison de la Kasbah, ce musée sera un lieu vivant de rencontres, d’échanges et de partages et présentera une programmation culturelle et des expositions liées à la région du nord.L’Ecole du Nord regroupe toutes les visions et pensées artistiques qui émanent de la région et qui ont façonné la création moderne et contemporaine marocaine. De par sa situation géographique, aux portes de l’Afrique et de l’Europe.",
      images: [
        "https://fnm.ma/wp-content/uploads/2022/01/Musee-dart-contemporain-Tanger_40-1536x1024.jpg",
        "https://fnm.ma/wp-content/uploads/2022/01/Musee-dart-contemporain-Tanger_5-1536x1024.jpg",
        "https://fnm.ma/wp-content/uploads/2022/01/Musee-dart-contemporain-Tanger_79-1536x1024.jpg",
        "https://fnm.ma/wp-content/uploads/2022/01/Musee-dart-contemporain-Tanger_81-1536x1024.jpg",
        
      ],
      city: "Tanger",
      link: "/destination/tanger",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    {
      name: "MUSÉE DE L’HISTOIRE ET DES CIVILISATIONS",
      description: "Le noyau du bâtiment du musée a été construit sous le Protectorat français dans les années 1920 pour abriter le Service des Antiquités du Protectorat. L’histoire des collections du musée commence en 1915 avec le lancement d’une série de fouilles archéologiques, à l’initiative du Général Lyautey.",
      images: [
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Histoire-et-civilisations6.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Histoire-et-civilisations4.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/mhc-2.jpg",
        "https://fnm.ma/wp-content/uploads/2021/12/Musee-Histoire-et-civilisations1-1024x683.jpg",
        
      ],
      city: "Rabat",
      link: "/destination/rabat",
      horaires: '',
      telephone: '',
      tarifs: '',
      location: '',
    },
    
  ];

  const CustomButton = ({ onClick }) => (
    <Button
      style={{ borderRadius: '20px', fontWeight: '700', top: '5px', color:'white', backgroundColor:'red' }}
      onClick={onClick}
      size="medium"
      variant="filledTonal"
    >
      More Info...
    </Button>
  );


   // State to manage the lightbox
   const [lightboxOpen, setLightboxOpen] = useState(false);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
   // Function to open the lightbox
   const openLightbox = (index) => {
     setCurrentImageIndex(index);
     setLightboxOpen(true);
   };
 
   // Function to close the lightbox
   const closeLightbox = () => {
     setLightboxOpen(false);
   };
 
   // Function to navigate to the next image
   const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % museumsData[0].images.length;
    setCurrentImageIndex(newIndex);
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + museumsData.length) % museumsData.length);
  };

  return (
    <div className="museums-container">
      {museumsData.map((museum, index) => (
        <div key={index} className="museum-item">
          <div className="museum-info">
            <Typography variant="h4">{museum.name}</Typography>
            <Typography style={{ textAlign: 'left'}} className='description' variant="body1">{museum.description}</Typography>
            <div className="location">
              <LocationOnIcon />
              <a className='museum_link' href={museum.link}><Typography variant="body2">{museum.city}</Typography></a>
            </div>
            <div className="slider">
            <CustomButton onClick={() => openLightbox(index)} />
            </div>
      
          </div>
          <div className="museum-slider">
            <MuseumSlider images={museum.images} museumName={museum.name}/>
          </div>
        </div>
      ))}

      {/* Lightbox component */}
      {lightboxOpen && (
        <Lightbox
          images={museumsData[currentImageIndex].images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          museumData={{
            name: museumsData[currentImageIndex].name,
            horaires: museumsData[currentImageIndex].horaires,
            telephone: museumsData[currentImageIndex].telephone,
            tarifs: museumsData[currentImageIndex].tarifs,
            location: museumsData[currentImageIndex].location,
          }}
        />
      )}
    </div>
  );
};

export default Museums;
