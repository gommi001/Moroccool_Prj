import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import Foot from "../../../components/foot/Footer"
import FooterBanner from "../../../components/footbanner/FooterBanner"
import Hero from '../../../components/hero/Hero'
import './histoire.scss'
import HistoireDes from '../../../components/HistoireDes/HistoireDes';


function HistoireCulture() {
  return (
    <div>
        <Navbar/>
        <Hero
          img="https://fnm.ma/wp-content/uploads/2022/09/Musee-Bab-Oqla-Tetouan_67-1536x1024.jpg"
          title='Histoire et Culture'
          subtitle="Une Exploration de l'Histoire et de la Culture Marocaines"
        />

        <div className="shopping-introduction-container">
          <div className="image-container">
              <img src="https://media.istockphoto.com/id/1174577688/photo/moroccan-mainhall-double-space-with-pond-in-the-middle-of-the-house-3d-rendering.jpg?s=612x612&w=0&k=20&c=nemeKtM56-LVPwY-F9_9x4glDCsfUikQ1xUuoKGyiPE=" alt="Shopping in Morocco" />
          </div>
          <div className="text-container">
            <h2>Exploration de l'Histoire du Maroc</h2>
            <p>Bienvenue dans une aventure captivante à travers les époques et les échos du passé, au cœur du Maroc. Découvrez une histoire riche qui s'étend des anciennes civilisations aux échanges commerciaux, tissée avec soin par des influences arabes et berbères. Des montagnes majestueuses de l'Atlas aux étendues infinies du désert du Sahara.</p>
            <button className="read-more-btn">Lire la suite</button>
          </div>
        </div>

        <HistoireDes/>

        <FooterBanner/>
        <Foot/>
    </div>
  )
}

export default HistoireCulture