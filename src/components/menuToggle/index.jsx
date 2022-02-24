import React, { useState } from 'react'
import './menuToggle.css'

const MenuToggle = () => {
    // const show = true
    const [show, setShow] = useState(false);
    const menuSection = document.querySelector(".menu-section")
    
    function clickMenuToggle () {
        
        document.body.style.overflow = show? "hidden": "initial"
        menuSection.classList.toggle("on", show)
        show? setShow(false) : setShow(true)
    }
    return (
        <div onClick={clickMenuToggle} className='menu-toggle'>
            <div className='one' />
            <div className='two' />
            <div className='three' />
        </div>
    )
}

export default MenuToggle;