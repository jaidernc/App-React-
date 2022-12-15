import React, { useState,useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import Productos from './json/Productos.json'

export const ItemDetailContainer = () => {

    const [item,setItem] = useState({})

    useEffect(() => {
        const promesa = new Promise((resolve) => {

            setTimeout(() => {
                resolve(Productos.find(item => item.id === 1))
            },2000)
        })

        promesa.then((data) => {
            setItem(data)
        })
    },[])

    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>        
    )

}