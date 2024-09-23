import React from 'react'
import styles from '../styles/Item_CART.module.css'
import { useNavigate } from 'react-router-dom'
import trashICON from '../assets/trash.png'
function Item_CART({id, name, amount,  price, image, remove}) {
    const navigate = useNavigate();
  return (
    <div className={styles.article}>
        <div className={styles.inf} onClick={()=>navigate("/item?id=" + id)}>
          <div className={styles.s1}>
            <h2 className={styles.titleItem}>{name}</h2>
            <img src={image} alt={name + " image"} />
          </div>
          <div className={styles.s2}>
            <h3 className={styles.amount}>Amount: {amount}</h3>
            <h2 className={styles.Utotal}>{(amount*price).toFixed(2)}$</h2>
            <button className={styles.removeBTN} onClick={(e)=>{remove(id), e.stopPropagation()}}><img src={trashICON}></img></button>
          </div>
        
        </div>
        
        
    </div>
  )
}

export default Item_CART