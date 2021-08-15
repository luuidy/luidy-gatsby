import React, {useState, useRef} from "react"
import {IoBagOutline, IoBagHandleOutline} from 'react-icons/io5'
import {BiSearch, BiShoppingBag} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import icon from '../images/diamond.png'
import "../styles/components/navbar.scss"

const Navbar = () =>{
    const search = useRef('')
    const [open, setOpen] = useState(false)

    return (
        <>
         <div className={`${open ? "wrap open" : "wrap"}`}>
            <img src={icon} alt="icon"/>
                <div className="wrap__container">
                    <div className="wrap__user">
                        <div className="wrap__user--div"/>
                        <span>Entrar</span>
                    </div>
                    <div className="wrap__bag">
                        <div className="wrap__bag--icon">
                            <IoBagOutline/>
                            <span className="wrap__bag--counter">2</span>
                        </div>
                        <span>Bolsa</span>
                    </div>
                </div>
            </div>
            <nav>
                <img src={icon} alt="icon"/>
                <form className="search">
                    <input className="search__input" required placeholder="Pesquisar..." type="text" ref={search}/>
                    <BiSearch className="search__icon"/>
                </form>
                <div className="profile-container">
                    <div className="profile-container__user">
                        <FiUser className="profile-container__user--icon"/>
                        <span>Entrar</span>
                        <ul className="profile-container__user--details">
                            <div className="profile-container__user--arrow-up"></div>
                            <li>Login</li>
                            <li>Meus Pedidos</li>
                            <li>Detalhes</li>
                        </ul>
                    </div>
                    <div className="profile-container__bag">
                        <IoBagHandleOutline/>
                        <span className="profile-container__bag--counter">2</span>
                    </div>
                </div>
                <div className="wrapper" onClick={()=>setOpen(!open)}>
                        <div
                            className={`wrapper circle ${
                            open ? "wrapper close" : "wrapper icon"
                            }`}
                        >
                            <span className="line top"></span>
                            <span className="line middle"></span>
                            <span className="line bottom"></span>
                        </div>
                </div>

            </nav>
        </>
    )
}


export default Navbar