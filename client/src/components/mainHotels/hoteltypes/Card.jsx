import React from 'react';
import styles from './Find.module.css';

const Card = ({ image, make, desc }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
      <h8>{desc}</h8>
    </div>
  );
};

export default Card;
