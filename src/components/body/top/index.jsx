import React from 'react'
import './bodyTop.css'
import Grid from '../../grid'

const bodyTop = () => {
    return (
        <div className='container'>
            <div className='initial-texts'>
                <h1 className='tittle'>Our Best recipes</h1>
                <h3 className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</h3>
            </div>
            <div className='contain-grid'>
                <Grid />
            </div>
        </div>
    )
}

export default bodyTop;