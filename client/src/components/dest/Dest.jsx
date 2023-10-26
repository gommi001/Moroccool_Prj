import React from 'react';
import styles from './Luxury.module.css';
import { Link } from 'react-router-dom';

const Dest = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>Destinations</h1>
        <p>Choisissez votre destination pour découvrir toutes ses détails</p>
      </div>

      <div className={styles.container}>
        <Link to="/destination/tangier">
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/flagged/photo-1555169048-be3ce0310b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80"
              alt=""
            />
            <div className={styles.content}>
              <h3>Tangier</h3>
              <p>Port méditerranéen animé, porte vers l'Europe.</p>
              <button className="btn_des">Découvrir</button>
            </div>
          </div>
        </Link>

        <Link to="/destination/essaouira">
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
              alt=""
            />
            <div className={styles.content}>
              <h3>Essaouira</h3>
              <p>Ville côtière marocaine, charme côtier relaxant.</p>
              <button className="btn_des">Découvrir</button>
            </div>
          </div>
        </Link>

        <Link to="/destination/fes">
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1569865867141-e15bba4c6dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
            <div className={styles.content}>
              <h3>Fes</h3>
              <p>Cité impériale historique, riche en culture</p>
              <button className="btn_des">Découvrir</button>
            </div>
          </div>
        </Link>

        <Link to="/destination/meknes">
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1612171579482-daee4955f5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <div className={styles.content}>
              <h3>Meknes</h3>
              <p>Ancienne ville impériale, calme et charmante.</p>
              <button className="btn_des">Découvrir</button>
            </div>
          </div>
        </Link>

        <Link to="/destination/rabat">
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1597081315272-a8b558ca4e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className={styles.content}>
              <h3>Rabat</h3>
              <p>Capitale marocaine culturelle et administrative.</p>
              <button className="btn_des">Découvrir</button>
            </div>
          </div>
        </Link>

        <Link to="/destination/casablanca">
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
            <div className={styles.content}>
              <h3>Casablanca</h3>
              <p>Métropole économique dynamique et cosmopolite.</p>
              <button className="btn_des">Découvrir</button>
            </div>
          </div>
        </Link>

        <Link to="/destination/marrakech">
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80"
              alt=""
            />
            <div className={styles.content}>
              <h3>Marrakech</h3>
              <p>Ville rouge, oasis touristique exotique.</p>
              <button className="btn_des">Découvrir</button>
            </div>
          </div>
        </Link>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1562874702-420f9992d682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className={styles.content}>
            <h3>Agadir</h3>
            <p>Ville côtière au sud marocain ensoleillée.</p>
            <button className="btn_des">Découvrir</button>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1450858930767-64b21437d41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className={styles.content}>
            <h3>Merzouga</h3>
            <p>Dunes de sable du désert impressionnantes.</p>
            <button className="btn_des">Découvrir</button>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1581443459255-e895f2a4222f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <div className={styles.content}>
            <h3>Toutes les Destinations</h3>
            <button className="btn_des">Découvrir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dest;
