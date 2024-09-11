import React from 'react'
import { useState, useEffect } from 'react';
import styles from '../styles/itemBlock.module.css';

function ItemBlock({title, url, price}){

    return (
    
      <div className={styles.itemBlock}>
        <h1>{title}</h1>
        <h2>{price}$</h2>
        <img src={url} alt={"placeholder text"} />
      </div>
    
  );
}

export default ItemBlock