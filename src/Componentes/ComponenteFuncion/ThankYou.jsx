import React from "react";
import { Link, useParams } from "react-router-dom";

export const ThankYou = () =>{

    const {id} = useParams()

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center alert alert-success" role="alert">
                        <h1>Graias por tu Compra</h1>
                        <p>El ID de tu compra es: <b>{id}</b></p>
                    </div>
                     <div className="text-center"><Link to={"/"} className="btn btn-dark">Hacer una Compra</Link></div>
                </div>
            </div>
        </div>
    )
}