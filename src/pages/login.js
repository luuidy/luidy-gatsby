import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from 'gatsby'
import icon from '../images/diamond_white.png'

import "../styles/login.scss"
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("email")); // watch input value by passing the name of it

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
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__group">
                            <input 
                                className={`form__input`}
                                name="email" 
                                type="email"
                                placeholder=" "
                                defaultValue="" {...register("email")}
                                />
                            <label htmlFor="email" className="form__label">
                                Email
                            </label>
                        </div>
                        <div className="form__group">
                            <input 
                                className="form__input" 
                                name="senha" 
                                type="password"
                                placeholder=" "
                                defaultValue="" {...register("senha")}
                                />
                            <label htmlFor="senha" className="form__label">
                                Senha
                            </label>
                        </div>

                        <div className="form__buttons">
                            <button type="submit">Entrar</button>
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
