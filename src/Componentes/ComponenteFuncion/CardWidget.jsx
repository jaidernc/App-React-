import React from 'react';

export const CardWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src={"img/cart.svg"} alt={"Carrito"} width= {32} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 1</span>
        </button>
    )
}