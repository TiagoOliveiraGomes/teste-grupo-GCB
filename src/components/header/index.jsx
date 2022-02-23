import React from 'react'
import './header.css'
import background from '../../assets/img/Illustration.svg'
import Tittle from '../tittle'
import HeaderOptions from '../headerOptions'

const Header = () => {
    return (
        <div className='header'>
            <img className='img' src={background} />
            <div className='topContain'>
                <Tittle tittle="Healthy Food"/>
                <HeaderOptions />
            </div>
            <div>
                <h1 className='inputQuestion'>Ready for Trying a new recipe?</h1>
                <input type="text" />
            </div>
        </div>
    )
}

export default Header;