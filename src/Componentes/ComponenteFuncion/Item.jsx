import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) =>{

    return(
        <Link to={'/item/' + item.id} className ="text-decoration-none text-dark">
            <div>
                <div className="card border border-0 ">
                    <img src={item.imagen} className="card-img-top tamañoimg" alt={item.Nombre}/>
                    <div className="card-body text center">
                        <p className="card-text">{item.Nombre}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}