import React from 'react';
import styles from './Find.module.css';

const Card = ({ image, make, desc }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
      <h7>{desc}</h7>
    </div>
  );
};

export default Card;
