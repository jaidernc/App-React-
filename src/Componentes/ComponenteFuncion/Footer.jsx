import React from "react";

export const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 text-center" >
                        <p>Copyright © 2022 NVIDIA Corporation</p>
                    </div>
                    <div className="col-md-6 text-center" >
                        <p>
                            <a href={"https://www.facebook.com/NVIDIA.LA"} className= "me-3"><img src={"img/81341.png"} alt="Facebook" width={24} /></a>
                            <a href={"https://twitter.com/NVIDIALA"} className= "me-3"><img src={"img/descarga.png"} alt="Facebook" width={24} /></a>
                            <a href={"https://www.instagram.com/nvidia/?hl=en"} className= "me-3"><img src={"img/87390.png"} alt="Facebook" width={24} /></a>
                        </p>
                    </div>              
                </div>
            </div>
        </div>
    )
}