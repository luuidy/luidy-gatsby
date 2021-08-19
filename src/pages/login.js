import React from 'react'
import {Link} from 'gatsby'
import icon from '../images/diamond_white.png'

import "../styles/login.scss"
const login = () => {
    return (
        <div className="login">
            <header className="login__header">
                <Link to="/"><img src={icon} alt="icon"/></Link>
            </header>
            <h1>Login</h1>
        </div>
    )
}

export default login
