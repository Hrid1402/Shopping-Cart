import React from 'react'
import {useState, useEffect} from 'react'
import ItemBlock from './ItemBlock'

const AllProducts = () => {

    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=50")
          .then((response) => response.json())
          .then((response) => {
            let temp = [];
            for(let [key, value] of Object.entries(response)){
                temp.push(value);
            }
            console.log(temp[0]);
            setProducts(temp[0]);
            
        }
        )
          .catch((error) => console.error(error));
      }, []);

    return (
        products && (
        <>
            <div>{products.length}</div>
            {products.map((p)=>{
            return <ItemBlock title={p.title} url={p.images[0]} price={p.price}/>}
            )
            }
        </>
        
        
    )
  );
}

export default AllProducts