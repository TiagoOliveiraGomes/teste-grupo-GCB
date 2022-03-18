import React from 'react'
import { Link } from 'react-router-dom'
import './headerOptions.css'

const HeaderOptions = () => {
    return (
        <nav className='headerOptions'>
            <ul>
                <Link to="/" className='button'>HEALTHY RECIPES</Link>
                <Link to="/" className='button'>BLOG</Link>
                <Link to="/" className='button'>JOIN</Link>
                <Link to="/register" className='button'>REGISTER</Link>
            </ul>
        </nav>
    )
}

export default HeaderOptions