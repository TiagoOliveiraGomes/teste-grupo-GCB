import React from 'react'
import './header.css'
import background from '../../assets/img/Illustration.svg'
import Tittle from '../tittle'
import HeaderOptions from '../headerOptions'

const Header = () => {
    return (
        <div className='header'>
            <div className='topContain'>
                <Tittle tittle="Healthy Food"/>
                <HeaderOptions />
            </div>
            <img className='img' src={background} />
        </div>
    )
}

export default Header;