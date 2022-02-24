import React from 'react'
import './grid.css'
import Card from '../card'
import brocolli from '../../assets/img/comida_1.svg'

const grid = () => {
    return (
        <section className='grid'>
            <Card source={brocolli}/>
            <Card source={brocolli}/>
            <Card source={brocolli}/>
            <Card source={brocolli}/>
        </section>
    )
}

export default grid;