import React from 'react';

export const ItemListContainer = ({greeting}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <p>{greeting}</p>
                </div>
            </div> 
        </div>
        )
    }