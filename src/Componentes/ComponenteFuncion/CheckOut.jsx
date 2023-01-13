import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import {addDoc, collection,getFirestore,} from 'firebase/firestore'
import { Navigate } from "react-router-dom";

export const CheckOut = () =>{

    const {cart,clear, sumaTotal}= useContext(CartContext)
    const [Nombre,setNombre]= useState("")
    const [Email,setEmail]= useState("")
    const [Telefono,setTelefono]= useState("")
    const [orderId,setOrderId]= useState("")

    const generarOrden= ()=>{
        const fecha = new Date()
        const order = {
            buyer:{name:Nombre,email:Email,phone:Telefono},
            items: cart.map(item =>({id:item.id, title:item.Nombre, price:item.precio, quantity:item.quantity,price_total:item.quantity*item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}-
            ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}:${fecha.getMilliseconds()}`,
            total: sumaTotal()
        }

         const db = getFirestore()
         const orderCollection = collection(db,"orders")
         addDoc(orderCollection,order).then((snapShot) =>{
            setOrderId(snapShot.id)
            clear()
         });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="Nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre"placeholder="ingrese sus datos" onInput={(e) =>{setNombre(e.target.value)}}/>
                       
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email"placeholder="ingrese su Email"onInput={(e) =>{setEmail(e.target.value)}}/>
                       
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="telefono"placeholder="ingrese su Telefono"onInput={(e) =>{setTelefono(e.target.value)}}/>
                       
                    </div>
                    <button type="button" onClick={generarOrden} className="btn btn-dark">Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item=>(
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.Nombre} width={64}/></td>
                                    <td className="align-middle">{item.Nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            
                            <tr>
                                <td><b>Total a pagar</b></td>
                                <td>${sumaTotal()}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={"/ThankYou/" + orderId}/>: "" }
                </div>
            </div>
        </div>
    )
}