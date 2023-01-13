import React from "react";

export const Loading = ()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center me-4">
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden ">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> 
                </div>
            </div>
        </div>
        
    )
}