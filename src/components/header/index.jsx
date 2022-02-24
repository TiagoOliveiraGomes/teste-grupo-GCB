import React from 'react'
import './header.css'
import background from '../../assets/img/Illustration.svg'
import Tittle from '../tittle'
import HeaderOptions from '../headerOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import MenuToggle from '../menuToggle'

const Header = () => {
    return (
        <div className='header'>
            <div className='contain'>
                <div className='topContain'>
                    <Tittle tittle="Healthy Food"/>
                    <MenuToggle />
                    <HeaderOptions />
                </div>
                <div className='containInput'>
                    <div className='inputGroup' >
                        <h1 className='inputQuestion'>Ready for Trying a new recipe?</h1>
                        <div>
                            <input className='searchInput' placeholder='Search healthy recipes' type="text" />
                            <button className='contain_Search_Button'>
                                <FontAwesomeIcon className='search_Button' icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ContainImg'>
                <img className='img' src={background} />
            </div>
        </div>
    )
}

export default Header;