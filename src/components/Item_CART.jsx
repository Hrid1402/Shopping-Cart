import React from 'react'
import styles from '../styles/Item_CART.module.css'
import { useNavigate } from 'react-router-dom'

function Item_CART({id, name, amount,  price, image, remove}) {
    const navigate = useNavigate();
  return (
    <div className={styles.article}>
        <button className={styles.inf} onClick={()=>navigate("/item?id=" + id)}>
            <h2>{amount}x {name}</h2>
            <img src={image} alt={name + " image"} />
            
            
            <h2>Total: {(amount*price).toFixed(2)}$</h2>
            
        </button>
        <button className={styles.removeBTN} onClick={()=>remove(id) }>Remove</button>
    </div>
  )
}

export default Item_CART