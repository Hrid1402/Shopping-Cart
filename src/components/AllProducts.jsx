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
        <div className={styles.main}>
            {products.map((p)=>{
                return <ItemBlock title={p.title} url={p.images[0]} price={p.price} key={uuidv4()}/>}
            )
            }
        </div>
        
        
    )
  );
}

export default AllProducts