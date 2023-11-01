import React from 'react'
import Slider from 'react-slick';
import './histoire.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function HistoireDes() {

  const NextArrow = ({ onClick }) => (
    <ArrowForwardIcon style={{right:'10px'}} onClick={onClick} className="custom-slick-arrow" />
  );
  
  const PrevArrow = ({ onClick }) => (
    <ArrowBackIcon style={{left:'10px'}} onClick={onClick} className="custom-slick-arrow" />
  );

  function Added (props){
    return(
      <div className="unesco-info">
          <CalendarMonthIcon fontSize="large" />
          <span className="unesco-text">Added To UNESCO</span>
          <span className="unesco-date">{props.date}</span>
        </div>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
  return (
    <div>
      {/* Second Section */}
      <h2 className='titre_Culture'>PATRIMOINE MATÉRIEL UNESCO</h2>
      
      <Slider {...settings} className="shopping-slider">
      <div className="shopping-card">
        <Added
          date='1981'
        />
        <img src="https://media.istockphoto.com/id/1486190255/photo/bab-bou-jeloud-ornate-city-gate-of-fes-el-bali-the-old-city-of-fez-morocco.jpg?s=612x612&w=0&k=20&c=kx7GY5YpiEPFglU9h5GYIXOYh6YnM_xrCIotlPjJnQ4=" alt="Card 1" />
        <div className="card-overlay">
          <h2>Médina de Fès</h2>
          <p>Fondée au IXe siècle, et abrite la plus ancienne université au monde, Fès a connu sa période faste aux XIIIe et XIVe siècles, sous la dynastie mérinide, quand elle supplanta Marrakech comme capitale du royaume. Le tissu urbain et les monuments essentiels de la médina remontent à cette période : médersa, fondouks, palais et demeures, mosquées, fontaines ...</p>
        </div>
      </div>

      <div className="shopping-card">
        <Added
            date='1985'
          />
        <img src="https://media.istockphoto.com/id/1359336035/photo/lalla-hasna-park-in-marrakesh.jpg?s=612x612&w=0&k=20&c=SzqYY0aJ5Qs2sQwEpBh5g6C62JfGtA5Kio3ajMqgE3I=" alt="Card 2" />
        <div className="card-overlay">
          <h2>Médina de Marrakech</h2>
          <p>Fondée en 1070-1072 par les Almoravides (1056-1147), Marrakech fut longtemps un centre politique, économique et culturel majeur dans la région. Capitale des almoravides et almohades, des monuments grandioses remontent à cette période : la mosquée de la Koutoubiya, la Casbah, les remparts, les portes monumentales, les jardins, etc. Plus tard, la ville accueillera d'autres merveilles, tels le palais Bandiâ, la medersa Ben Youssef, les tombeaux saâdiens, de grandes demeures, etc. La place Jamaâ El Fna, véritable théâtre en plein air, émerveille toujours les visiteurs, elle a même été inscrite sur la liste du la liste du patrimoine immatérielle de l'unesco.</p>
        </div>
      </div>

      <div className="shopping-card">
        <Added
          date='1987'
        />
        <img src="https://images.unsplash.com/photo-1680880482590-0f4b9b5258c7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3NhcnxlbnwwfDB8MHx8fDA%3D" alt="Card 3" />
        <div className="card-overlay">
          <h2>Ksar d'Aït-Ben-Haddou</h2>
          <p>Ensemble de bâtiments de terre entourés de murailles, le ksar est un type d'habitat traditionnel présaharien. Les maisons se regroupent à l'intérieur de ses murs défensifs renforcés par des tours d'angle. Aït-Ben-Haddou, situé dans la province de Ouarzazate, est un exemple frappant de l'architecture du Sud marocain.</p>
        </div>
      </div>

      <div className="shopping-card">
        <Added
          date='1997'
        />
        <img src="https://media.istockphoto.com/id/1495426272/photo/meknes-region-morocco.jpg?s=612x612&w=0&k=20&c=TLkGPbG55egtY0maV4SvVmY3z2IabrZW24nJ8PJs5Lk=" alt="Card 4" />
        <div className="card-overlay">
          <h2>Ville historique de Meknès</h2>
          <p>Fondée au XIe siècle par les Almoravides en tant qu'établissement militaire, Meknès devint capitale sous le règne de Moulay Ismaïl (1672-1727). Il en fit une impressionnante cité de style hispano-mauresque ceinte de hautes murailles percées de portes monumentales qui montre aujourd'hui l'alliance harmonieuse des styles répandus dans le Maroc du XVIIe siècle.</p>
        </div>
      </div>
      
      <div className="shopping-card">
        <Added
          date='1997'
        />
        <img src="https://media.istockphoto.com/id/1226801652/photo/tetouan-white-city-view.jpg?s=612x612&w=0&k=20&c=KlOPclqxQTAs6DFwYJfOVezG_aegJfv44DqvR_zKNr0=" alt="Card 4" />
        <div className="card-overlay">
          <h2>Médina de Tétouan (ancienne Titawin)</h2>
          <p>Tétouan a eu une importance particulière à partir du VIIIe siècle, comme principal point de jonction entre le Maroc et l'Andalousie. Après la Reconquête, la ville a été reconstruite par des réfugiés revenus dans cette région après avoir été chassés par les Espagnols. Cela est visible dans l’architecture et l’art que les marocains ont développé en Andalouse. Au XVI siècle, Tetouan a connu un essor économique et social sous le règne de la Hora. C'est l'une des plus petites médinas marocaines, mais sans aucun doute la plus complète, dont, ultérieurement, la majorité des bâtiments sont restés à l'écart des influences extérieures.</p>
        </div>
      </div>

      <div className="shopping-card">
        <Added
            date='1997'
          />
        <img src="https://media.istockphoto.com/id/1472456043/photo/morocco-volubilis-famous-site-morocco-meknes-province.jpg?s=612x612&w=0&k=20&c=6AyBbMJiRyqI-_FA42RqA4Jm9J7wXr2VG0st9YRjiw8=" alt="Card 4" />
        <div className="card-overlay">
          <h2>Site archéologique de Volubilis</h2>
          <p>La capitale de la Maurétanie, fondée au IIIe siècle av. J.-C., fut un avant-poste important de l'Empire romain et a été ornée de nombreux beaux monuments. Il en subsiste d'importants vestiges dans le site archéologique, situé dans une région agricole fertile. La ville devait devenir plus tard, pendant une brève période, la capitale d'Idriss Ie r , fondateur de la dynastie des Idrissides, enterré non loin de là, à Moulay Idriss.</p>
        </div>
      </div>

      <div className="shopping-card">
        <Added
          date='2001'
        />
        <img src="https://media.istockphoto.com/id/1222470019/photo/colorful-streets-of-essaouira-maritime-town-morocco.jpg?s=612x612&w=0&k=20&c=4CFySa-kLa14BOnzCDYYc2Ueb5OHT5OOf9ZZ62W6E5A=" alt="Card 4" />
        <div className="card-overlay">
          <h2>Médina d’Essaouira (ancienne Mogador)</h2>
          <p>Les fortifications portugaises de Mazagan furent édifiées comme colonie fortifiée sur la côte atlantique au début du XVIe siècle. La colonie fut reprise par les Marocains en 1769. Les fortifications, avec leurs bastions et remparts, constituent un exemple précoce de l’architecture militaire de la Renaissance. Les édifices portugais encore visibles sont la citerne et l’église de l’Assomption, construite dans le style manuélin. La ville portugaise de Mazagan, l’un des premiers établissements en Afrique occidentale des explorateurs portugais qui faisaient route vers l’Inde, offre un témoignage exceptionnel des influences croisées entre les cultures européenne et marocaine, qui apparaissent clairement dans l’architecture, la technologie et l’urbanisme.</p>
        </div>
      </div>

      <div className="shopping-card">
        <Added
          date='2004'
        />
        <img src="https://media.istockphoto.com/id/481265080/photo/the-portuguese-citadel-of-mazagan-el-jadida-morocco.jpg?s=612x612&w=0&k=20&c=DnHuPtTgz5tVffpnhuSDAsFqMDBCXUc6D4-sAYGSolo=" alt="Card 4" />
        <div className="card-overlay">
          <h2>Ville portugaise de Mazagan (El Jadida)</h2>
          <p>Les fortifications portugaises de Mazagan furent édifiées comme colonie fortifiée sur la côte atlantique au début du XVIe siècle. La colonie fut reprise par les Marocains en 1769. Les fortifications, avec leurs bastions et remparts, constituent un exemple précoce de l’architecture militaire de la Renaissance. Les édifices portugais encore visibles sont la citerne et l’église de l’Assomption, construite dans le style manuélin. La ville portugaise de Mazagan, l’un des premiers établissements en Afrique occidentale des explorateurs portugais qui faisaient route vers l’Inde, offre un témoignage exceptionnel des influences croisées entre les cultures européenne et marocaine, qui apparaissent clairement dans l’architecture, la technologie et l’urbanisme.</p>
        </div>
      </div>
      
      <div className="shopping-card">
        <Added
          date='2012'
        />
        <img src="https://media.istockphoto.com/id/1358106308/photo/chellah-rabat-morocco.jpg?s=612x612&w=0&k=20&c=Q-xX_AQ7YXhm1NOmpmrdfwAC89dLTMb4HGIicAecyyo=" alt="Card 4" />
        <div className="card-overlay">
          <h2>Rabat, capitale moderne et ville historique : un patrimoine en partage</h2>
          <p>Située sur la façade atlantique, au nord-ouest du Maroc, Rabat est le résultat d’un dialogue fructueux entre le passé arabo-musulman et le modernisme occidental. Le site comprend la « ville nouvelle », la résidence royale, des administrations coloniales, des ensembles résidentiels et commerciaux, le jardin d’Essais – botanique et d’agrément. On y trouve aussi des parties anciennes de la ville qui remontent parfois au XIIe siècle. La « ville nouvelle » représente un des plus grands et plus ambitieux projets urbains du XXe siècle en Afrique, probablement le plus complet. Outre les remparts et portes almohades, la ville abrite la mosquée Hassan édifiée par les almohades en 1184.</p>
        </div>
      </div>

      </Slider>
      {/* Second Section End*/}
    </div>
  )
}

export default HistoireDes