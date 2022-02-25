import React from 'react'
import './bodyMiddle.css'
import imgService from '../../../assets/img/bloco_services.svg'

const bodyMiddle = () => {
    return (
        <div className='container-middle'>
            <img src={imgService}/>
            <div className='group-text'>
                <h1 className='tittle'>The best services ready to serve you</h1>
                <h3 className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</h3>
                <h3 className='text'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h3>
                <h3 className='text'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h3>
                <button>Know More</button>
            </div>
        </div>
    )
}

export default bodyMiddle;