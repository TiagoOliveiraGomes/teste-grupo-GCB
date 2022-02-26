import React from 'react'
import './header.css'
import background from '../../assets/img/Illustration.svg'
import Tittle from '../tittle'
import HeaderOptions from '../headerOptions'
import MenuToggle from '../menuToggle'
import InputGroup from '../inputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import NavHeader from '../navHeader'

const Header = () => {
    const SearchButton = <FontAwesomeIcon className="search_Button" icon={faSearch} />
    return (
        <div className='header'>
            <div className='contain'>
                <NavHeader />
                <div className='containInput'>
                    <InputGroup placeholder="Search healthy recipes" text="Ready for Trying a new recipe?" button={SearchButton} />
                </div>
            </div>
            <div className='ContainImg'>
                <img className='img' src={background} />
            </div>
        </div>
    )
}

export default Header;