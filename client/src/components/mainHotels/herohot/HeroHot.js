import React from 'react'
import './herohot.scss'
import { Link } from 'react-router-dom'

function HeroHot() {
  return (
    <div>
        <div className='hot_hero'>
        <img className='cf_img' alt='' src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
      </div>
      <div className="content_hot"> 
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
              <select className='select'>
                <option>Casablanca</option>
                <option>Meknes</option>
                <option>Fes</option>
                <option>Marrakech</option>
                <option>Tangier</option>
                <option>Rabat</option>
                <option>Essaouira</option>
              </select>
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <Link to='/things/hotels/hotelsearch'> <button>Explore Now</button> </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroHot