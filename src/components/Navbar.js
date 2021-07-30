import React, {useState, useRef} from "react"
import {RiVipDiamondFill} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'

import "../styles/components/navbar.scss"

const Navbar = () =>{
    const search = useRef('')
    return (
        <nav>
            <RiVipDiamondFill className="icon" size="4em"/>
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
                    <BsBag size="2.3em"/>
                    <span className="profile-container__bag--counter">2</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar