import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Amine from '../amine/Amine'

function Hero() {

    
    return (
        <div className='hero'>
    
    
            <Amine
                image1='https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                title1='Disover Famous places in Morocco'
                desc1=''

                image2='https://images.pexels.com/photos/3878114/pexels-photo-3878114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                title2='Discorver Touristic Places'
                desc2=''

                image3='https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                title3='Discover Moroccan Delicious Plates'
                desc3=''
            />    
        </div>
    )
}

export default Hero
