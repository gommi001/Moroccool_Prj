import React from 'react'
import styles from './Driver.module.css';
import Casa from '../../assets/casa.jpg'

const Driver = (props) => {
  return (
    <div className={styles.driver}>
      <h1>Why {props.city}</h1>
        <div className={styles.left}>
            <img src={props.image} alt="/" />
        </div>
        <div>
            <p>{props.description}</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Driver