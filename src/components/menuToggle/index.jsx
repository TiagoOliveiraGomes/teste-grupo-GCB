import React from 'react'
import './menuToggle.css'

const menuToggle = () => {
    let show = true
    const menuSection = document.querySelector(".menu-section")
    
    function clickMenuToggle () {
            menuSection.classList.toggle("on", show)

            document.body.style.overflow = show? "hidden": "initial"
            show = !show
    }
    return (
        <div onClick={clickMenuToggle} className='menu-toggle'>
            <div className='one' />
            <div className='two' />
            <div className='three' />
        </div>
    )
}

export default menuToggle;