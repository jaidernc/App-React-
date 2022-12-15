import React from 'react';

export const ItemDetail = ({item}) => {

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.Nombre} />
                <h1>{item.Nombre}</h1>
                <p>{item.precio}</p>
            </div>
        </div>
    )

}