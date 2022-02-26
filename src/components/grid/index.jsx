import React from 'react'
import './grid.css'
import Card from '../card'
import brocolli from '../../assets/img/comida_1.svg'
import burger from '../../assets/img/comida_2.svg'
import salad from '../../assets/img/comida_3.svg'
import pie from '../../assets/img/comida_4.svg'

const grid = () => {
    return (
        <section className='grid'>
            <Card source={brocolli} text="Broccoli Salad with Bacon" element={<button>See Recipe</button>}/>
            <Card source={burger} text="Classic Beef Burguers" element={<button>See Recipe</button>}/>
            <Card source={salad} text="Classic Potato Salad" element={<button>See Recipe</button>}/>
            <Card source={pie} text="Cherry Cobbler on the Grill" element={<button>See Recipe</button>}/>
        </section>
    )
}

export default grid;