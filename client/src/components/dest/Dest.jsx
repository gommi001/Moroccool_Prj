import React from 'react'
import styles from './Luxury.module.css'
import {Link} from 'react-router-dom'


const Dest = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h1>Find Your Destination</h1>
        </div>
        
      <div className={styles.container}>

      <Link to='/destination/meknes'>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1612171579482-daee4955f5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            <div className={styles.content}>
                <h3>Meknes</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                <button className='btn_des'>Visit Meknes</button>
            </div>
        </div>
        </Link>

        <Link to='/destination/marrakech'>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1585336897192-540964ec47f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFycmFrZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className={styles.content}>
                <h3>Marrakech</h3>
                <p>Marrakech is one of the four Imperial cities of Morocco...</p>
                <button className='btn_des'>Visit Marrakech</button>
            </div>
        </div>
        </Link>

        <Link to='/destination/essaouira'>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="" />
            <div className={styles.content}>
                <h3>Essaouira</h3>
                <p>Essaouira is one of the four Imperial cities of Morocco...</p>
                <button className='btn_des'>Visit Essaouira</button>
            </div>
        </div>
        </Link>

        <Link to='/destination/casablanca'>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Casablanca</h3>
                <p>Casablanca is one of the four Imperial cities of Morocco...</p>
                <button className='btn_des'>Visit Casablanca</button>
            </div>
        </div>
        </Link>

        <Link to='/destination/fes'>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Fes</h3>
                <p>Fes is one of the four Imperial cities of Morocco...</p>
                <button className='btn_des'>Visit Fes</button>
            </div>
        </div>
        </Link>

        <Link to='/destination/rabat'>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Rabat</h3>
                <p>Rabat is one of the four Imperial cities of Morocco...</p>
                <button className='btn_des'>Visit Rabat</button>
            </div>
        </div>
        </Link>

        <Link to='/destination/tangier'>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Tangier</h3>
                <p>Tangier is one of the four Imperial cities of Morocco...</p>
                <button className='btn_des'>Visit Tangier</button>
            </div>
        </div>
        </Link>

        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Casablanca</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                <button>Visit Meknes</button>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Casablanca</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                <button>Visit Meknes</button>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Casablanca</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                <button>Visit Meknes</button>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Casablanca</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                <button>Visit Meknes</button>
            </div>
        </div>
        <div className={styles.card}>
            <img src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <div className={styles.content}>
                <h3>Casablanca</h3>
                <p>Meknes is one of the four Imperial cities of Morocco...</p>
                <button>Visit Meknes</button>
            </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default Dest