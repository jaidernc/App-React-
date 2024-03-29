import React from 'react'
import { Item } from './Item'

export const ItemList = ({items}) =>{

    return(
       <div className="row">
            {
                items.map(item =>
                    <div className="col-md-3" key={item.id}>
                        <Item item = {item}/>
                    </div>
                
                )
            }
       </div>
    )   
}