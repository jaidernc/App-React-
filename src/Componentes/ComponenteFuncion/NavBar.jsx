import React from "react";
import { CardWidget } from "./CardWidget";

export const NavBar = () =>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={"img/logoNvidia.png"} alt={"Logo Nvidia"} width = {80}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/computadores">Computadores</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/smartphones">Smartphones</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/accesorios">Accesorios</a>
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