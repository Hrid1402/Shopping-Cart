import React from 'react'
import {useState, useEffect} from 'react'
import ItemBlock from './ItemBlock'
import styles from '../styles/allProducts.module.css'
import { v4 as uuidv4 } from 'uuid';



function AllProducts({url="https://dummyjson.com/products?limit=50", search}){
    
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
        <>
        {
          (search==null || search[0] == "") ? null : (search[1]==false) ? <h2 className={styles.result}>Results for: <span>{search}</span></h2> : <h2 className={styles.result}>Category: <span>{search}</span></h2>
        }
        
        {
          products && (

            (products.length>1) ?
            <div className={styles.main}>
            {
              products.map((p)=>{ return <ItemBlock title={p.title} url={p.thumbnail} price={p.price} id={p.id} key={uuidv4()}/>})
            }
            </div> : <div><h1 className={styles.sorry}>Oops! We Couldn't Find That Item</h1><h2 className={styles.sorry}>It looks like what you're searching for isn't available. Try checking your spelling or explore other great products at MetroMarket!</h2></div>
  
            )
          
        }
        </>
      );

    
}

export default AllProducts