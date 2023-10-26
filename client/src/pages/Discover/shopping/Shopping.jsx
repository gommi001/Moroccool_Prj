import React from 'react'
import Shop from '../../../components/shopping/Shop'
import Navbar from '../../../components/navbar/Navbar';
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner";
import Hero from '../../../components/hero/Hero'
import './shopping.scss'

function Shopping() {
  return (
    <div>
        <Navbar/>
        <Hero
            img="https://media.istockphoto.com/id/1463115424/photo/colorful-spices-and-dyes-found-at-souk-market-in-marrakesh-morocco.jpg?s=612x612&w=0&k=20&c=Lpipyix23klQYQhBGWl0s4KGNTQ7ZKYxq_Irawpf5fI="
            title="Shopping in Morocco" 
            subtitle="Discover Shop Moroccan Treasures" 
        />

        <div className="shopping-introduction-container">
            <div className="image-container">
              <img src="https://media.istockphoto.com/id/978955830/photo/typical-souk-market-in-the-medina-of-marrakech-morocco.webp?b=1&s=170667a&w=0&k=20&c=Ajdi8uVe1Y4Wgku6fXty_HEFmFyt3tvd3M8SnhvvUUs=" alt="Shopping in Morocco" />
            </div>
            <div className="text-container">
              <h2>Découvrez la riche tradition du shopping marocain.</h2>
              <p>Immergez-vous dans les marchés vibrants du Maroc, où les traditions séculaires se mêlent harmonieusement à l'artisanat moderne. Des souks animés aux boutiques contemporaines, explorez un monde de trésors artisanaux et de trouvailles uniques. Laissez les couleurs, les parfums et les sons vous guider à travers une expérience shopping inoubliable au cœur du Maroc.</p>
            </div>
        </div>

        <Shop/>

        <FooterBanner/>
        <Foot/>

    </div>
  )
}

export default Shopping