import React from 'react'
import './header.css'
import Tittle from '../tittle'
import HeaderOptions from '../headerOptions'

const Header = () => {
    return (
        <div className='header'>
            <Tittle>Healthy Food</Tittle>
            <HeaderOptions />
        </div>
    )
}

export default Header;