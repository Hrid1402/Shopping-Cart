import React from 'react'
import {useState, useEffect} from 'react'
import ItemBlock from './ItemBlock'
import styles from '../styles/allProducts.module.css'
import { v4 as uuidv4 } from 'uuid';


function AllProducts({url="https://dummyjson.com/products?limit=50"}){
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((response) => {
            let temp = [];
            for(let [key, value] of Object.entries(response)){
                temp.push(value);
            }
            setProducts(temp[0]);
        }
        )
          .catch((error) => console.error(error));
      }, [url]);
      return (
        products && (

          (products.length>1) ?
          <div className={styles.main}>
          {
            products.map((p)=>{ return <ItemBlock title={p.title} url={p.thumbnail} price={p.price} id={p.id} key={uuidv4()}/>})
          }
          </div> : <div><h1>Sorry, we didn't found your item, try with something else!</h1></div>
          
        )
      );

    
}

export default AllProducts