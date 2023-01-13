import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock,onAdd}) =>{
    
    const [counter,setCounter] = useState(1);
    const [productoStock,setProductoStock] = useState(stock);
    const [vendido,setVendido] = useState(false)

    const incrementarStock = () =>{
        if (counter < productoStock){
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () =>{
        if(counter > 1){
            setCounter(counter - 1);
        }
    }
    

    const addTocart = (quantity) =>{
        setVendido(true)
        setCounter(0)
        setProductoStock(productoStock - quantity)
        onAdd(quantity)
        /*if((counter <= stock)) {
        console.log("Agregaste:" + counter + "productos al carrito");
        setStock(stock - counter);
        setCounter(1)
        }*/
    }

    useEffect(()=>{
        setProductoStock(stock);
    },[stock])

    return(
        <div className="container">
            <div className="row mb-3">
                <div className='col-md-12'>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-outline-primary">{counter}</button>
                    <button type="button" className="btn btn-outline-primary"onClick={incrementarStock}>+</button>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-dark">Terminar mi Compra</Link> : <button className="btn btn-outline-dark" onClick={() => {addTocart(counter)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}
export default ItemCount;