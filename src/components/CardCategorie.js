import React from 'react'

import '../styles/components/cardCategorie.scss'

export default function CardCategorie() {
    return (
        <div className="card" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg')"}}>
            <div className="card__mask"/>
            <div className="card__content">
                <h1>Camisas</h1>
            </div>
        </div>
    )
}
