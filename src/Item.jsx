import React, { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import { useSearchParams } from 'react-router-dom';
import styles from './styles/Item.module.css';
import Comment from './components/Comment.jsx';
import box from './assets/box.png';


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
            if(localStorage.getItem("items") != null){
                let clone = JSON.parse(localStorage.getItem("items"));
                for(let o of clone){
                    if(o.id == response.id){
                        setInCart(true);
                        setAmount(o.amount);
                    }
                }
            }  
          })
          .catch((error) => console.error(error));
        
    }, [url])

    const handleInputChange = (event) => {
        const myValue = parseInt(event.target.value);
        setAmount(parseInt(myValue));
        changeAmountFromCart(myValue);
      };

    function addToCart(){
        if(localStorage.getItem("items") != null){
            let clone = [...JSON.parse(localStorage.getItem("items"))];
            clone.push({id: item.id, name: item.title, amount: amount ,price: item.price, thumbnail: item.thumbnail});
            localStorage.setItem("items", JSON.stringify(clone));
        }else{
            localStorage.setItem("items", JSON.stringify([{id: item.id, name: item.title, amount: amount ,price: item.price, thumbnail: item.thumbnail}]));
        }
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
    function changeAmountFromCart(thisAmount){
        if(localStorage.getItem("items") == null){
            return
        }
        let clone = [...JSON.parse(localStorage.getItem("items"))];
        for(let ob of clone){
            if(ob.id == item.id){
                ob.amount = thisAmount;
                localStorage.setItem("items", JSON.stringify(clone));
                break;
            }
        }
        
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
                        item.tags.map((t, i)=> {return <h4 className={styles.tag} key={i}>{t} </h4 >})
                    }
                    </div>
                    
                    <h1 className={styles.itemName}>{item.title}</h1>
                    {(item.brand) ? <h2 className={styles.brand}>{item.brand}</h2 > : <h2 className={styles.brand}>Generic</h2>}
                    <h2 className={styles.price}>{item.price}$</h2>
                    <p className={styles.descr}>{item.description}</p>
                    <h3>Rating: ⭐ {item.rating}</h3>
                    <h3 className={styles.ship}><img src={box}/>{item.shippingInformation}</h3>
                    <h3>{item.warrantyInformation}</h3>
                    <div className={styles.amount}>
                        <button onClick={()=> {
                            (amount>1)? (setAmount(amount-1), changeAmountFromCart(amount-1)): null}
                            }>-</button>
                        <input type="number" min="0" max="99" value={amount} onChange={handleInputChange} />
                        <button onClick={()=> {setAmount(amount+1) 
                            changeAmountFromCart(amount+1)}}>+</button>
                    </div>
                    {
                        (!inCart) ? <button className={styles.addBTN}  onClick={()=>addToCart()}>Add to cart</button> : <button className={styles.addBTN} onClick={()=>removeFromCart()}>Remove from cart</button>
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