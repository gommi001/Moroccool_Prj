import React from 'react';
import './DestinationsStyles.css';

function Destinations() {
  return (
    <div name="destinations" className="gallery">
      <div className="container">
        <h1>Fixez Vos Objectifs</h1>
        <p>Au sein des lieux d'exception du Maroc</p>
        <div className="img-container">
          <img
            className="span-3 image-grid-row-2"
            src="https://images.unsplash.com/photo-1536868313473-7480e7c169f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80"
            alt="/"
          />
          <img
            className="image0"
            src="https://images.pexels.com/photos/943510/pexels-photo-943510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
          <img
            className="image0"
            src="https://images.pexels.com/photos/10203425/pexels-photo-10203425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
          <img
            className="image0"
            src="https://images.unsplash.com/photo-1674813800347-410fbe365ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <img
            className="image0"
            src="https://images.unsplash.com/photo-1533501747004-381b96042e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
