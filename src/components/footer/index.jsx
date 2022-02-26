import React from 'react'
import './footer.css'
import Copyright from '../copyright';
import FooterOptions from '../footerOptions';
import finalImg from '../../assets/img/bloco_final_image.svg'
import InputGroup from '../inputGroup';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-block'>
                <InputGroup placeholder="Enter your email address" text="Join our membership to get special offer" button={<h3>Join</h3>} />
                <img src={finalImg} />
            </div>
            <div className='bottom-group'>
                <Copyright />
                <FooterOptions />
            </div>
        </div>
    )
}

export default Footer;