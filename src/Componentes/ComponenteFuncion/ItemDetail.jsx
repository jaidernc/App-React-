import React from 'react';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import ItemCount from './ItemCount'

export const ItemDetail = ({item}) => {
    
    const {addItem} = useContext(CartContext)
    
    const onAdd = (quantity) => {
        addItem(item,quantity)
    }

    return (
        <div className="row my-5">
            <div className="col-md-4 offset-md-4 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.Nombre} />
                <h1>{item.Nombre}</h1>
                <p>{item.precio}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )

}