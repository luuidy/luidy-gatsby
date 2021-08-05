import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

import '../styles/components/cardCategorie.scss'

export default function CardCategorie({nome, imagem}) {
    return (
        <div className="card" style={{backgroundImage: `url('${imagem}')`}}>
            <div className="card__mask"/>
            <div className="card__content">
                <h1>{nome}</h1>
                <span>Visitar Página <BsArrowRight className="icon" /></span>
            </div>
        </div>
    )
}
