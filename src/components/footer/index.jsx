import React from 'react'
import './footer.css'
import Copyright from '../copyright';
import FooterOptions from '../footerOptions';

const Footer = () => {
    return (
        <div className='footer'>
            <Copyright />
            <FooterOptions />
        </div>
    )
}

export default Footer;