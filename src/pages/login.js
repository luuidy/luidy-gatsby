import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'
import icon from '../images/diamond_white.png'

import "../styles/login.scss"
const Login = () => {


    return (
        <div className="login">
            <header className="login__header">
                <Link to="/"><img src={icon} alt="icon"/></Link>
            </header>
            <section className="container">
                <div className="entrar">
                    <div className="entrar__header">
                        <h1>Entrar</h1>
                        <span>Entre com Login e Senha</span>
                    </div>
                    <form className="form">
                        <div className="form__group">
                            <input 
                                className="form__input" 
                                name="email" 
                                type="email" />
                            <label htmlFor="email" className="form__label">
                                Email
                            </label>
                        </div>
                        <div className="form__group">
                            <input className="form__input" name="senha"  required type="password" />
                            <label htmlFor="senha" className="form__label">
                                Senha
                            </label>
                        </div>

                        <div className="form__buttons">

                        </div>
                    </form>
                </div>
                <div className="cadastrar">
                    Cadastrar
                </div>
            </section>
        </div>
    )
}

export default Login
