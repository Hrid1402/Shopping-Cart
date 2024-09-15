import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../styles/itemBlock.module.css';
import { useNavigate} from "react-router-dom";
function ItemBlock({title, url, price, id}){

  const navigate = useNavigate();
    return (
      
      <button className={styles.itemBlock} onClick={()=>{
        console.log("["+id+"] " + title)
        navigate("/item?id=" + id);

        
        }}>
        <h1>{title}</h1>
        <h2>{price}$</h2>
        <img src={url} alt="" />
      </button>
    
  );
}

export default ItemBlock