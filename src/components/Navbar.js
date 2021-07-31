import React, {useState, useRef} from "react"
import {IoBagOutline} from 'react-icons/io5'
import {RiShoppingBagLine} from 'react-icons/ri'

import icon from '../images/diamond.png'
import "../styles/components/navbar.scss"

const Navbar = () =>{
    const search = useRef('')
    return (
        <nav>
            <img src={icon} alt="icon"/>
            <form className="search">
                <input className="search__input" required type="text" ref={search}/>
                <label htmlFor="" className="search__label">
                    Pesquisar...
                </label>
            </form>
            <div className="profile-container">
                <div className="profile-container__user">
                    <div className="profile-container__user--div"/>
                    <span>Entrar</span>
                </div>
                <div className="profile-container__bag">
                    <IoBagOutline size="3.2rem"/>
                    <span className="profile-container__bag--counter">2</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar