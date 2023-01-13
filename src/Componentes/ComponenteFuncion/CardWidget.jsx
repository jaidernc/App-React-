import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

export const CardWidget = () => {
    
    const {cartTotal} = useContext(CartContext)
    
    return cartTotal() ? <Link to={'/cart'} className="btn btn-light position-relative"title="Ir al carrito">
            <img src={"/img/cart.svg"} alt={"Carrito"} width= {32} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link>:""
    
}