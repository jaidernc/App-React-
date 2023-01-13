import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


export const Cart = () =>{

    const {cart,removeItem,sumaTotal,clear,cartTotal}= useContext(CartContext)

    if(cartTotal() === 0){
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">No se encontraron productos</div>
                            <div className="text-center"><Link to={"/"} className="btn btn-dark">Hacer una Compra</Link></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" className="text-end" colSpan={5} title="Vaciar Carrito"><Link onClick={clear} className="btn btn-dark">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center" >Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.Nombre} width={64}/></td>
                                    <td className="align-middle">{item.Nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={()=>{removeItem(item.id)}} title="Eliminar productos"><img src="img/3844425_can_trash_icon.svg" alt={"Eliminar productos"} width={24}/></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td>&nbsp;</td>
                                <td colSpan={2} className=""><b>Total</b></td>
                                <td className="text-center"><b>${sumaTotal()}</b></td>
                                <td className="text-end"><Link to={"/CheckOut"} className="btn btn-dark" title= "Finalizar Compra">Finalizar Compra</Link></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}