import React, { useState } from 'react'
import './menuToggle.css'

const MenuToggle = () => {
    // const show = true
    const [show, setShow] = useState(true);
    
    function clickMenuToggle () {
        const menuSection = document.querySelector(".menu-section")
        
        document.body.style.overflow = show? "hidden": "initial"
        console.log("O 'show' é: ", show)
        menuSection.classList.toggle("on", show)
        console.log("Mensagem para saber onde esta o erro...2")
        setShow(!show)
        // show? setShow(false) : setShow(true)
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