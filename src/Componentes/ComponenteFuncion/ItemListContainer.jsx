import {collection, getDocs, getFirestore, query,where } from 'firebase/firestore';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { Loading } from './Loading';
export const ItemListContainer = () => {
    
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db,"items");
        const q = id ? query(itemsCollection,where("categoria","==",id)) : itemsCollection
        getDocs(q).then((snapShot)=>{
            setItems(snapShot.docs.map((doc)=> ({id:doc.id, ...doc.data()})))
            setLoading(false)
        })

    },[id])

    return (
        <div className="container">
            {loading ? <Loading/> : <ItemList items ={items}/>}
        </div>
        )
    }