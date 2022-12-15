import React from 'react'

export const Item = ({item}) =>{

    return(
        <div>
            <div className="card border border-0 ">
                <img src={item.imagen} className="card-img-top tamañoimg" alt={item.Nombre}/>
                <div className="card-body text center">
                    <p className="card-text">{item.Nombre}</p>
                </div>
            </div>
        </div>
    )
}