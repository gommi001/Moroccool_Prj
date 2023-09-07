import React from 'react'
import styles from './Luxury.module.css'
import {Link} from 'react-router-dom'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h1>Find Your Destination</h1>
        </div>     
        
        <Link to='/destination'>
            <h6 className={styles.viewMoreButton}>Find More <ArrowCircleRightRoundedIcon fontSize='medium' /> </h6>
        </Link>

      <div className={styles.container}>   
        <a href='/destination/meknes' style={{color:'black'}}>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1612171579482-daee4955f5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            <div className={styles.content}>
                <h3>Meknes</h3>
                <p>Meknes is one of the four Imperial cities </p>       
            </div>
        </div> 
        </a>       
      
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1585336897192-540964ec47f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFycmFrZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className={styles.content}>
                <h3>Marrakech</h3>
                <p>Marrakech is one of the four Imperial cities of Morocco...</p>
                
            </div>
        </div>        
      
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="" />
            <div className={styles.content}>
                <h3>Essaouira</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                
            </div>
        </div>
      
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Casablanca</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                
            </div>
        </div>     
        
        </div>
        
        
    </div>
  )
}

export default Luxury