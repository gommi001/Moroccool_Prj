  import React from 'react';
  import Slider from 'react-slick';
  import './BestThingsToDo.css';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import { Link } from 'react-router-dom'; 
  import BlogData from '../blog/BlogData'


  const BestThingsToDo = () => {

    const NextArrow = ({ onClick }) => (
    <ArrowForwardIcon style={{right:'10px'}} onClick={onClick} className="custom-slick-arrow" />
  );

  const PrevArrow = ({ onClick }) => (
    <ArrowBackIcon style={{left:'10px'}} onClick={onClick} className="custom-slick-arrow" />
  );

  // Shopping component
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const events = [
      { date: '18-19 octobre', event: 'Morocco FoodExpo à Casablanca', image: 'https://media.istockphoto.com/id/653452628/photo/streets-of-fez.jpg?s=612x612&w=0&k=20&c=hHmqS5ZEHNU8zNlYOJusFS99L0_30IMMpFfTq-oLB8Q=' },
      { date: '21-23 octobre', event: 'Festival des Dattes à Erfoud', image: 'https://media.istockphoto.com/id/1458490141/photo/young-traveling-woman-visiting-a-copper-souvenir-handicraft-shop-in-marrakesh-morocco-travel.jpg?s=612x612&w=0&k=20&c=jbIQATJxhpnB35Uxz7ldOL08u2ZaBtX7JEoNL6qjI70=' },
      { date: '4-6 novembre', event: 'Festival des Olives à Meknès', image: 'https://media.istockphoto.com/id/1495287396/photo/koutoubia-mosque-at-medina-district-in-marrakesh-morocco.jpg?s=612x612&w=0&k=20&c=Q-i6f81DhuPcPUunoMqEPS2FP_mEUqPOkplgG8W8nOA=' },
      { date: '11-13 novembre', event: 'Festival du Miel à Imouzzer Ida Outanane', image: 'https://media.istockphoto.com/id/1495137169/photo/ashtray-at-medina-district-in-marrakesh-morocco.jpg?s=612x612&w=0&k=20&c=NsvFgUpAPZxnSF8v_RSzHJgMZHeoafLLkQwY87x2PzE=' },
      { date: '2-4 décembre', event: 'Festival du Couscous à Settat', image: 'https://media.istockphoto.com/id/1472835397/photo/ramadan-kareem.jpg?s=612x612&w=0&k=20&c=3RaR2zXxEUp9ZDka5IhQfkVm575jgueYXmduRoSAue8=' },
      { date: '9-11 décembre', event: 'Festival du Tagine à Imlil', image: 'https://media.istockphoto.com/id/1472835397/photo/ramadan-kareem.jpg?s=612x612&w=0&k=20&c=3RaR2zXxEUp9ZDka5IhQfkVm575jgueYXmduRoSAue8=' },
    ];

    //
    const districts = [
    {
      name: 'Medina Market',
      images: ['https://media.istockphoto.com/id/1418845761/photo/amazing-view-of-kasbah-ait-ben-haddou-near-ouarzazate-in-the-atlas-mountains-of-morocco.jpg?s=612x612&w=0&k=20&c=Ea4AJf0ktNSgPRLQa06d6S7eg2q9Evto5R_O1mkMSUU=', 'https://media.istockphoto.com/id/1418845761/photo/amazing-view-of-kasbah-ait-ben-haddou-near-ouarzazate-in-the-atlas-mountains-of-morocco.jpg?s=612x612&w=0&k=20&c=Ea4AJf0ktNSgPRLQa06d6S7eg2q9Evto5R_O1mkMSUU=', 'https://media.istockphoto.com/id/1448748170/photo/looking-through-ancient-fort-gate-palm-trees-and-sky-at-rabat-morocco.jpg?s=612x612&w=0&k=20&c=58hqV33_9P_iJmQIIta74QmtKjV829qwuicW_bsyZxs='],
      description: 'Experience the vibrant atmosphere of traditional markets in the heart of the city.',
    },
    {
      name: 'Artisan Quarter',
      images: ['artisan1.jpg', 'artisan2.jpg', 'artisan3.jpg'],
      description: 'Explore the unique crafts and skills of local artisans in this charming district.',
    },
    {
      name: 'Modern Boutiques Avenue',
      images: ['boutiques1.jpg', 'boutiques2.jpg', 'boutiques3.jpg'],
      description: 'Indulge in contemporary shopping at stylish boutiques showcasing the latest trends.',
    },
    {
      name: 'Cultural Bazaar',
      images: ['bazaar1.jpg', 'bazaar2.jpg', 'bazaar3.jpg'],
      description: 'Immerse yourself in the rich culture of Morocco through the treasures of the cultural bazaar.',
    },
  ];

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


    return (
      <div className="best-things-to-do-container">
        {/* First Section */}
          <h2>Journey Through Morocco's Marketplace</h2>
          <div className="best-things-list">
            {/* Add your best things to do items here */}
            {BlogData.map((blog, index) => (
              <Link key={index} to={{ pathname: `/blog/${blog.id}`, state: { contentId: blog.id } }}>
                <div className="best-thing-item">
                  <img src={blog.image} alt={`Thing ${index + 1}`} />
                  <h3>{blog.title}</h3>
                  <p>{blog.card_description}</p>
                </div>
              </Link>
            ))}

            {/* <div className="best-thing-item">
              <img src="https://media.istockphoto.com/id/1457129136/photo/fez-morocco-metal-craftsman-making-copper-trays.jpg?s=612x612&w=0&k=20&c=0pPyk6du142Ncg1rLTdZaiyh5oCrRFMN7hL-eX6tk_g=" alt="Thing 2" />
              <h3>Artisanal Marvels: Moroccan Crafts</h3>
              <p>Step into the world of Moroccan craftsmanship</p>
            </div>

            <div className="best-thing-item">
              <img src="https://media.istockphoto.com/id/1294324610/photo/coloured-lamps-in-a-street-market-marrakesh-souk-morocco.jpg?s=612x612&w=0&k=20&c=D8aKZpXynkB3YQK5Ws4oNhU85ras_xRP_wwKGLvcNZk=" alt="Thing 2" />
              <h3>Souks and Medina Markets</h3>
              <p>Discover the allure of Moroccan markets and souks</p>
            </div> */}

            {/* Add more items as needed */}
          </div>
        {/* First Section End*/}

        {/* Second Section */}
        <h2>Moroccan Treasures Explorer</h2>
        <Slider {...settings} className="shopping-slider">
        <div className="shopping-card">
          <img src="https://fnm.ma/wp-content/uploads/2021/12/mhc-2.jpg" alt="Card 1" />
          <div className="card-overlay">
            <h2>Discover Traditional Souks</h2>
            <p>Immerse yourself in the vibrant energy of Moroccan souks, where ancient traditions and modern finds collide.</p>
          </div>
        </div>

        <div className="shopping-card">
          <img src="https://media.istockphoto.com/id/1001721908/photo/moroccan-plaster-arabesque-carving.jpg?s=612x612&w=0&k=20&c=6gPpR4n1JiNyTz8vnXZvQQfxz6erF2vczz4HJuqgs_g=" alt="Card 2" />
          <div className="card-overlay">
            <h2>Art of Negotiation</h2>
            <p>Learn the art of negotiation, an essential skill for navigating the labyrinth of markets and securing the best deals.</p>
          </div>
        </div>

        <div className="shopping-card">
          <img src="https://media.istockphoto.com/id/1294321554/photo/koutoubia-mosque-in-the-morning-marrakesh-morocco.jpg?s=612x612&w=0&k=20&c=pT-d0PhwqvBYqT6_fTHzUUCdxlXCnNk-HN1rYqlH0k0=" alt="Card 3" />
          <div className="card-overlay">
            <h2>Authentic Handcrafted Treasures</h2>
            <p>Explore authentic handcrafted treasures that tell stories of Moroccan craftsmanship and cultural heritage.</p>
          </div>
        </div>

        <div className="shopping-card">
          <img src="https://media.istockphoto.com/id/509645445/photo/brightly-colored-kilims-for-sale-in-casablanca-morocco.jpg?s=612x612&w=0&k=20&c=piQZVdCmPFbcnIrB0HqUOtPalGgnubZP3SgVY10laCs=" alt="Card 4" />
          <div className="card-overlay">
            <h2>Modern Boutiques Unveiled</h2>
            <p>Uncover the charm of modern Moroccan boutiques, where contemporary style meets traditional elegance.</p>
          </div>
        </div>
        </Slider>
        {/* Second Section End*/}

        {/* Third Section*/}
        <div className="culinary-events-calendar-container">
        <h2>Culinary Events Calendar</h2>
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">{event.date}</div>
                <div className="event-details">
                  <img src={event.image} alt='' />
                  <h5 style={{marginTop:'5px'}}>{event.event}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Third Section End*/}

        {/* Fourth Section*/}
        <div className="distinctive-shopping-districts-container">
          <h2>Distinctive Shopping Districts</h2>
          <div className="districts-list">
            {districts.map((district, index) => (
              <div key={index} className="card">
                <Slider {...sliderSettings}>
                  {district.images.map((image, i) => (
                    <img key={i} src={image} alt={`Slider for ${district.name}`} />
                  ))}
                </Slider>
                <div className="card-details">
                  <h3>{district.name}</h3>
                  <p>{district.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Fourth Section End*/}
        

      </div>
    );
  };

  export default BestThingsToDo;