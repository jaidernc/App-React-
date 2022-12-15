import React from "react";
import { Link,NavLink } from "react-router-dom";
import { CardWidget } from "./CardWidget";

export const NavBar = () =>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src={"/img/logoNvidia.png"} alt={"Logo Nvidia"} width = {80}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page"to ={"/Category/computadores"}>Computadores</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link"to ={"/Category/monitores"}>Monitores</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to ={"/Category/tarjetas graficas"}>Tarjetas Graficas</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CardWidget/>
                </div>
            </div>
        </div>
    )
}