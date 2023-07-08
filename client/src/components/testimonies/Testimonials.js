import React from 'react'
import './Testimonials.css'
import { AiFillStar } from "react-icons/ai";


const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card_tes'>
                        <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='user1'/>
                        <p>I really love this website, there is a lot of opportunities . I really apreciate the work they do .</p>
                        <p><span>Johnson.M.J.</span></p>
                        <p>5 <AiFillStar color='gold'/></p>
                    </div>
                    <div className='card_tes'>
                        <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='user1'/>
                        <p>I really love this website, there is a lot of opportunities . I really apreciate the work they do .</p>
                        <p><span>Carol Harper</span></p>
                        <p>4.5 <AiFillStar color='gold'/></p>
                    </div>
                    <div className='card_tes'>
                        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='user1'/>
                        <p>I really love this website, there is a lot of opportunities . I really apreciate the work they do .</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>4.9 <AiFillStar color='gold'/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
