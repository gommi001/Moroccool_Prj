import React from 'react'
import './SelectsStyles.css'
import { Link } from 'react-router-dom'


import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <h1>Exclusive Events</h1>
            <h5>Discover Traditional and New Events</h5>
            
            <div className='container'>
                <SelectsImg bgImg='https://gcdn.imgix.net/events/les-princesses-du-chaabi-de-retour-a-la-fol-1.jpeg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' text='Bidawa Maroc' />
                <SelectsImg bgImg='https://gcdn.imgix.net/events/concert-electro-samifati-1.jpg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' text='SamiFati AltF4' />
                <SelectsImg bgImg='https://gcdn.imgix.net/events/2rDJ1XBTkTXguCK6UGCvAe8MOKbvnLdl7l5B1dOa.jpeg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' text='Mamoun AlTab' />
                <SelectsImg bgImg='https://gcdn.imgix.net/events/4sgyAdYKXVeMQNQDGgDSRuB8utV22goj6gAmtdCy.jpeg' text='Gnawa Event' />
                <SelectsImg bgImg='https://gcdn.imgix.net/events/4sgyAdYKXVeMQNQDGgDSRuB8utV22goj6gAmtdCy.jpeg' text='Gnawa Event' />
                <SelectsImg bgImg='https://gcdn.imgix.net/events/hommage-aux-divas-marocaines.jpg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' text='SamiFati AltF4' />
            </div>
            <Link to='/events'> <button className='more_des'>View All...</button> </Link>

        </div>
    )
}

export default Selects
