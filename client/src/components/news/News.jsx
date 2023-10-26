import React, {useState} from 'react';
import './news.scss';  
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const NewsAnnouncement = () => {
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState({ title: '', content: '', images: [] });

  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClickOpen = (title, content, images) => {
    setCurrentNews({ title, content, images });
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="news-announcement-container">
      <h2 className="section-title">Traveling Between Cities</h2>
      <ul className="news-list">
        {/* News Item 1 */}
        <li className="news-item" onClick={() => handleClickOpen("TGV (Train a Grande Vitesse)", "Le TGV (Train à Grande Vitesse) au Maroc est une avancée majeure dans le domaine des transports, offrant une option rapide et moderne pour les déplacements à travers le pays. Le TGV, exploité par l'Office National des Chemins de Fer (ONCF), a considérablement réduit les temps de trajet entre les principales villes du Maroc, améliorant ainsi l'efficacité du transport ferroviaire.Le TGV au Maroc est connu pour sa vitesse élevée, permettant aux passagers de parcourir de longues distances en un temps relativement court. Il relie des villes telles que Casablanca, Rabat, Tanger, et Kenitra, offrant une alternative rapide et confortable aux autres modes de transport.", ["https://www.visitmorocco.com/sites/default/files/tgv.jpg", "https://rail.ninja/sites/default/files/2020-05/image%20%282%29.png", "https://rail.ninja/sites/default/files/2020-05/image%20%285%29.png"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/tgv.jpg" 
            alt="TGV"
          />
          <div className="news-details">
            <h2 className="news-title">TGV (Train a Grande Vitesse)</h2>
            <p>Le TGV Maroc est un service de train à grande vitesse au Maroc opéré par le réseau de l'Office National des Chemins de Fer (ONCF)...</p>
          </div>
        </li>

        {/* News Item 2 */}
        <li className="news-item" onClick={() => handleClickOpen("Train", "Etant le deuxième réseau ferroviaire d’Afrique, le réseau de l'Office National des Chemins de Fer (ONCF)", ["https://www.visitmorocco.com/sites/default/files/train.jpg", "https://maroc-diplomatique.net/wp-content/uploads/2019/07/ONCF.jpg"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/train.jpg" 
            alt="Train"
          />
          <div className="news-details">
            <h2 className="news-title">Train</h2>
            <p>Etant le deuxième réseau ferroviaire d’Afrique, le réseau de l'Office National des Chemins de Fer (ONCF)...</p>
            
          </div>
        </li>

        {/* News Item 3 */}
        <li className="news-item" onClick={() => handleClickOpen("AutoCar", "Les autocars au Maroc représentent un mode de transport terrestre largement utilisé et apprécié. Ces véhicules de transport en commun, également connus sous le nom d'autocars, offrent une solution pratique et abordable pour les déplacements à travers le pays. Opérant sur un réseau routier bien développé, les autocars au Maroc connectent efficacement diverses villes, villes et régions, offrant aux voyageurs une option fiable pour explorer la beauté et la diversité du pays.Les autocars au Maroc représentent un mode de transport terrestre largement utilisé et apprécié. Ces véhicules de transport en commun, également connus sous le nom d'autocars, offrent une solution pratique et abordable pour les déplacements à travers le pays. Opérant sur un réseau routier bien développé, les autocars au Maroc connectent efficacement diverses villes, villes et régions, offrant aux voyageurs une option fiable pour explorer la beauté et la diversité du pays.", ["https://lereporter.ma/wp-content/uploads/2020/06/Transport-routier-Les-bus-de-la-CTM-regagnent-les-routes.jpg", "https://www.autocars-sarlin.com/public/img/big/Capture23PNG_5d67918b57aa1.PNG"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/autocar_0.jpg" 
            alt="AutoCar"
          />
          <div className="news-details">
            <h2 className="news-title">AutoCar</h2>
            <p>Si vous avez choisi de voyager en autocar, de nombreuses compagnies privées vous offrent tout le confort nécessaire...</p>
            
          </div>
        </li>

        {/* News Item 4 */}
        <li className="news-item" onClick={() => handleClickOpen("Grand Taxi", "Les grands taxis au Maroc, également connus sous le nom de 'taxis collectifs' ou 'taxis grands', sont un mode de transport populaire pour les déplacements interurbains. Les grands taxis au Maroc sont des véhicules de taille plus importante, souvent des voitures berlines, qui opèrent sur des itinéraires spécifiques entre les villes et les villages. Contrairement aux petits taxis urbains qui fonctionnent à l'intérieur des villes, les grands taxis parcourent de plus longues distances, facilitant ainsi les déplacements entre différentes régions.", ["https://www.lopinion.ma/photo/art/grande/62708100-45382635.jpg?v=1646074306", "https://www.bladi.net/img/logo/grands-taxis-nombre-passagers.jpg"])}>
          <img
            className="news-image"
            src="https://www.lopinion.ma/photo/art/grande/62708100-45382635.jpg?v=1646074306" 
            alt="Grand Taxi"
          />
          <div className="news-details">
            <h2 className="news-title">Grand Taxi</h2>
            <p>Au Maroc, les grands taxis effectuent du covoiturage à but lucratif, ils répondent aux besoins des habitants...</p>
            
          </div>
        </li>

        {/* News Item 5 */}
        <li className="news-item" onClick={() => handleClickOpen("Avion", "Les vols entre les villes au Maroc offrent une option rapide et pratique pour les déplacements à travers le pays. Les vols intérieurs au Maroc connectent plusieurs villes à travers le pays, offrant une alternative efficace aux autres modes de transport terrestre. Les principales compagnies aériennes marocaines proposent des vols réguliers entre les aéroports nationaux", ["https://www.lopinion.ma/photo/art/grande/73616517-51223934.jpg?v=1687288304", "https://www.bladi.net/img/logo/royal-air-maroc-vols-speciaux-precisions.jpg"])}>
          <img
            className="news-image"
            src="https://english.visitkorea.or.kr/public/images/2023/04/26/7bceb36f8db94b3486877bc7360eb01d.jpg" 
            alt="Avion"
          />
          <div className="news-details">
            <h2 className="news-title">Avion</h2>
            <p>Voyagez à la vitesse de l'éclair et explorez le Maroc en prenant l'avion entre les villes. Avec des liaisons aériennes efficaces...</p>
            
          </div>
        </li>

        {/* News Item 6*/}
        <li className="news-item" onClick={() => handleClickOpen("Voiture de Location", "La location de voiture au Maroc offre aux voyageurs une grande flexibilité pour explorer le pays à leur rythme. La location de voiture au Maroc est une option populaire pour les voyageurs qui souhaitent avoir la liberté de se déplacer de manière indépendante et explorer les différentes régions du pays. Les agences de location de voitures sont présentes dans les grandes villes, les aéroports et les zones touristiques.es dans les grandes villes, les aéroports et les zones touristiques", ["https://maroc-diplomatique.net/wp-content/uploads/2021/02/place-de-parking.jpg", "https://www.bladi.net/img/logo/arton73424.jpg"])}>
          <img
            className="news-image"
            src="https://media.istockphoto.com/id/1693674132/photo/person-using-a-remote-wireless-car-key-to-unlock-or-lock-a-vehicle.jpg?s=612x612&w=0&k=20&c=a_Wqb6mp8dqiDdzFPAn35tAGaVyZ60xnpdtPhHjKT8s=" 
            alt="Voiture de Location"
          />
          <div className="news-details">
            <h2 className="news-title">Voiture de Location</h2>
            <p>Louer une voiture peut aussi s’avérer une belle alternative pour profiter au maximum de votre séjour...</p>
            
          </div>
        </li>

        {/* Add more news items as needed */}
      </ul>

      <h2 className="section-title1">Traveling Inside Cities</h2>
      <ul className="news-list">
        {/* News Item 1 */}
        <li className="news-item" onClick={() => handleClickOpen("Tramway", "Les tramways au Maroc sont modernes, propres et bien entretenus, offrant un moyen de transport confortable. Ils sont souvent utilisés pour les déplacements quotidiens, que ce soit pour le travail, l'éducation ou les loisirs. Les billets de tramway peuvent être achetés aux stations ou via des systèmes de cartes prépayées pour une utilisation régulière.", ["https://media.istockphoto.com/id/647288678/photo/city-tram-on-a-street-of-casablanca-morocco.jpg?s=612x612&w=0&k=20&c=_1IOlR0iSmIvuqKiw4X2Xt0MS8_Xixl1YNh9UZCeX6s=", "https://i0.wp.com/leseco.ma/wp-content/uploads/2020/03/tramway-rabat.jpg?fit=1200%2C600&ssl=1"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/tramway.jpg" 
            alt="Tramway"
          />
          <div className="news-details">
            <h2 className="news-title">Tramway</h2>
            <p>Le tramway est le moyen privilégié pour se déplacer dans les villes...</p>
            
          </div>
        </li>

        {/* News Item 2 */}
        <li className="news-item" onClick={() => handleClickOpen("Petit Taxi", "Les petits taxis au Maroc sont des compagnons colorés des rues urbaines, offrant une option de transport populaire pour les déplacements locaux. Arborant des couleurs vives spécifiques à chaque ville, tels que le rouge, le bleu ou le blanc, ils sont omniprésents dans les grandes agglomérations comme Casablanca, Rabat, et Marrakech. ", ["https://www.visitmorocco.com/sites/default/files/train.jpg", "https://maroc-diplomatique.net/wp-content/uploads/2019/07/ONCF.jpg"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/taxi.jpg" 
            alt="Petit Taxi"
          />
          <div className="news-details">
            <h2 className="news-title">Petit Taxi</h2>
            <p>Le petit taxi est le moyen de transport le plus utilisé au Maroc. Il roule qu’à l’intérieur de la ville...</p>
            
          </div>
        </li>

        {/* News Item 3 */}
        <li className="news-item" onClick={() => handleClickOpen("Bus Touristique", "Le Bus Touristique Électrique au Maroc offre une expérience de voyage durable et pittoresque. Propulsé par l'énergie électrique, ce bus touristique moderne propose des circuits à travers les principales attractions des villes marocaines. Avec son design écologique, il contribue à réduire l'empreinte carbone du tourisme tout en offrant une vue imprenable sur les paysages urbains", ["https://www.visitmorocco.com/sites/default/files/train.jpg", "https://maroc-diplomatique.net/wp-content/uploads/2019/07/ONCF.jpg"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/bus.jpg" 
            alt="Bus Touristique"
          />
          <div className="news-details">
            <h2 className="news-title">Bus Touristique</h2>
            <p>Le bus touristique découverte, est également un moyen de se déplacer à l’intérieur des villes...</p>
            
          </div>
        </li>
        {/* News Item 3 */}
        <li className="news-item" onClick={() => handleClickOpen("Ville AutoBus", "L'AutoBus Public en Ville au Maroc constitue le moyen de transport principal pour les déplacements intra-urbains. Ces autobus, intégrés au réseau de transport public, offrent une solution pratique et abordable pour les habitants et les visiteurs des villes marocaines. Dotés d'itinéraires bien planifiés, les AutoBus Publics relient les quartiers", ["https://www.visitmorocco.com/sites/default/files/train.jpg", "https://maroc-diplomatique.net/wp-content/uploads/2019/07/ONCF.jpg"])}>
          <img
            className="news-image"
            src="https://industries.ma/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-11-at-10.58.16-696x522.jpeg" 
            alt="Ville AutoBus"
          />
          <div className="news-details">
            <h2 className="news-title">Ville AutoBus</h2>
            <p>Bus Modifier. Il existe différents réseaux de transport en commun par autobus au Maroc...</p>
            
          </div>
        </li>

        {/* News Item 4 */}
        <li className="news-item" onClick={() => handleClickOpen("Velos", "Les vélos électriques au Maroc représentent une alternative écologique et innovante pour les déplacements urbains. Ces vélos, propulsés par un moteur électrique, offrent une manière pratique et durable de se déplacer dans les villes marocaines. Accessibles via des stations de location disséminées stratégiquement,", ["https://www.visitmorocco.com/sites/default/files/train.jpg", "https://maroc-diplomatique.net/wp-content/uploads/2019/07/ONCF.jpg"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/velos.jpg" 
            alt="Velos"
          />
          <div className="news-details">
            <h2 className="news-title">Velos</h2>
            <p>Vous pouvez également louer un vélo, si vous voulez vadrouiller dans les villes plus librement....</p>
            
          </div>
        </li>

        {/* News Item 5 */}
        <li className="news-item" onClick={() => handleClickOpen("Balade en calèche", "Une balade en calèche au Maroc offre une expérience pittoresque et authentique. Les calèches, souvent richement ornées, ajoutent une touche de charme et d'élégance aux rues animées des villes marocaines. Tirées par des chevaux majestueux, ces calèches offrent une manière tranquille et agréable de découvrir les sites historiques.", ["https://www.visitmorocco.com/sites/default/files/train.jpg", "https://maroc-diplomatique.net/wp-content/uploads/2019/07/ONCF.jpg"])}>
          <img
            className="news-image"
            src="https://www.visitmorocco.com/sites/default/files/balade-en-caleche_0.jpg" 
            alt="Balade en calèche"
          />
          <div className="news-details">
            <h2 className="news-title">Balade en calèche</h2>
            <p>La Calèche vous fait expérimenter le dédale de ses ruelles qui serpentent au cœur des villes...</p>
            
          </div>
        </li>   
      </ul>

      {/* Dialog for displaying news details */}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={dialogOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {currentNews.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon style={{color:'black'}}/>
        </IconButton>
        <DialogContent dividers>
          <Slider {...settings} className="image-slider">
            {currentNews.images.map((image, index) => (
              <div key={index} className="slider-image-container">
                <img src={image} alt={`Image ${index}`} className="slider-image" />
              </div>
            ))}
          </Slider>
          <Typography sx={{fontWeight:'600'}} gutterBottom>{currentNews.content}</Typography>
        </DialogContent>
      </BootstrapDialog>

    </div>
  );
};

export default NewsAnnouncement;
