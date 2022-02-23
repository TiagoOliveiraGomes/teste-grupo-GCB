import React from 'react'
import './home.css'

import Header from '../../components/header'
import Body from '../../components/body'
import Footer from '../../components/footer'

const home = ()=> {
    return (
        <div className='home'>
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}

export default home;