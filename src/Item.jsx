import React, { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import { useSearchParams } from 'react-router-dom';
import styles from './styles/Item.module.css';
import Comment from './components/Comment.jsx';

let itemsOnCard= {};
function Item() {
    const [searchParams] = useSearchParams();
    const [amount, setAmount] = useState(1);
    const [inCart, setInCart] = useState(false);
    const [url] = useState("https://dummyjson.com/products/" + searchParams.get("id"));
    const [item, setItem] = useState(null);
    useEffect(()=>{
        fetch(url)
          .then((response) => response.json())
          .then((response) => {
            setItem(response)
            let clone = JSON.parse(localStorage.getItem("items"));
            for(let o of clone){
                if(o.id == response.id){
                    setInCart(true);
                }
            }
          })
          .catch((error) => console.error(error));
        
    }, [url])

    function addToCart(){
        let clone = [...JSON.parse(localStorage.getItem("items"))];
        clone.push({id: item.id, name: item.title, amount: amount ,price: item.price, thumbnail: item.thumbnail});
        localStorage.setItem("items", JSON.stringify(clone));
        setInCart(true);
        console.log(JSON.parse(localStorage.getItem("items")));
    }
    function removeFromCart(){
        let clone = [...JSON.parse(localStorage.getItem("items"))];
        clone = clone.filter((ob)=>ob.id!=item.id);
        localStorage.setItem("items", JSON.stringify(clone));
        setInCart(false);
        console.log(JSON.parse(localStorage.getItem("items")));
    }

    return (
    <>
        <TopBar></TopBar>
        {item && (
        <>
            <article>
                <div className={styles.imgContainer}>
                    <img src={item.images[0]} className={styles.picture}/>
                </div>
                <div>
                    <h3>Category: {item.category}</h3>
                    <div className={styles.tags}>
                        <h4>Tags: </h4>
                    {   
                        item.tags.map((t, i)=> {return <h4 key={i}>{t}</h4 >})
                    }
                    </div>
                    
                    <h1>{item.title}</h1>
                    {(item.brand) ? <h2>{item.brand}</h2> : <h2>Generic</h2>}
                    <h2>Price: {item.price}$</h2>
                    <h3>{item.description}</h3>
                    <h3>Rating: ⭐ {item.rating}</h3>
                    <h3>{item.shippingInformation}</h3>
                    <h3>{item.warrantyInformation}</h3>
                    <div className={styles.amount}>
                        <button>-</button>
                        <input type="number" min="0" max="99" defaultValue="1" onChange={()=> setAmount(value)}/>
                        <button>+</button>
                    </div>
                    {
                        (!inCart) ? <button className={styles.addBTN}  onClick={()=>addToCart()}>Add to the cart</button> : <button className={styles.addBTN}  onClick={()=>removeFromCart()}>Remove from cart</button>
                    }
                    
                </div>
                
            </article>
            <h2 className={styles.reviewText}>Reviews</h2>
            <div className={styles.reviews}>
                {item.reviews.map((r,  i)=>{return <Comment key={i} name={r.reviewerName} comment={r.comment} date={r.date} rating={r.rating}></Comment>})}
                
            </div>
            
        </>
        )}
        
    </>
    
  )
}

export default Item