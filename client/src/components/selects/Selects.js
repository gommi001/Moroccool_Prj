import React from 'react'
import './SelectsStyles.css'
import { Link } from 'react-router-dom'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';


function Selects() {
    return (
        <div name='views' className='selects'>
            <h1>Exclusive Events</h1>
            <h6>Discover Traditional and New Events</h6>

            <Link to='/events'>
                <h6 className='viewMoreButton'>View More ... <ArrowCircleRightRoundedIcon fontSize='medium' /> </h6>
            </Link>
            
            <div className='container'>
                <div className='selects-location'>
                    <img src='https://gcdn.imgix.net/events/didib-en-concert-1.jpeg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' alt='/' />
                </div>
                <div className='selects-location'>
                    <img src='https://gcdn.imgix.net/events/pinocchio-a-casablanca-seance-15h00.jpeg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' alt='/' />
                </div>
                <div className='selects-location'>
                    <img src='https://gcdn.imgix.net/events/hassan-el-fad-who-is-kabour-a-casablanca-6.jpg?w=450&h=450&fit=crop&crop=entropy&auto=format,compress&q=80' alt='/' />
                </div>
            </div>           

        </div>
    )
}

export default Selects
