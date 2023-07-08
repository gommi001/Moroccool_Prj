import React from 'react'
import './Gallery.css'



function Gallery(props) {
    return (
        <div name='destinations' className='gallery'>
            <div className="container">
                <h1>Discover the Beautiful city of {props.city}</h1>
                <p>Best modern and historical places</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' id='image1' src={props.img1} alt="/"/>
                    <img className='image0' src={props.img2} alt="/"/>
                    <img className='image0' src={props.img3} alt="/"/>
                    <img className='image0' src={props.img4} alt="/"/>
                    <img className='image0' src={props.img5 } alt="/"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Gallery
