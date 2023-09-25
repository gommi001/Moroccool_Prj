import React from 'react';
import './description.scss';
import './DescriptionData.js';
import DescriptionData from './DescriptionData.js';

function Description() {
  return (
    <div className="description">
      <h1>Pourquoi choisir le Maroc</h1>
      <p>
        Les visites vous donnent l’occasion de voir beaucoup de choses, dans un
        laps de temps donné.
      </p>

      <DescriptionData
        cName="first-des"
        heading="C'est le Maroc"
        text="Le Maroc, au carrefour de l'Afrique et de l'Europe, offre des paysages diversifiés, du désert du Sahara aux montagnes de l'Atlas. Riche en culture, il propose des marchés animés, des cités anciennes et une hospitalité chaleureuse."
        img1="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
        img2="https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <DescriptionData
        cName="first-des-reverse"
        heading="Les destinations d'exception au Maroc"
        text="Plongez dans l'incroyable diversité du Maroc, entre cultures variées, paysages époustouflants, histoire millénaire et une hospitalité inoubliable, une expérience unique vous attend"
        img1="https://images.unsplash.com/photo-1550697318-929498858774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
        img2="https://images.unsplash.com/photo-1545167496-c1e092d383a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9yb2Njb3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default Description;
