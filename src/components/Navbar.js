import React from "react"
import {RiVipDiamondFill} from 'react-icons/ri'
import {BsBag} from 'react-icons/bs'

import "../styles/components/navbar.scss"

const Navbar = () =>{
    return (
        <nav>
            <RiVipDiamondFill className="icon" size="4em"/>
            <form className="search">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s" 
                />
                <button type="submit">Search</button>
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