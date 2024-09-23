import React, { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import Item_CART from './components/Item_CART';
import styles from './styles/Cart.module.css';
import { v4 as uuidv4 } from 'uuid';
import github from './assets/githubICON.png'


import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([])
  function modifyCart(){
    if (localStorage.items!= null){
      setItems((JSON.parse(localStorage.items)));
    }
    
  }
  function removeItem(id){
    let clone = [...JSON.parse(localStorage.getItem("items"))];
    let clean = [];
    for(let ob of clone){
      if(ob.id != id){
        clean.push(ob);
        console.log("DELETE", ob.name);
      }
    }
    console.log("clean", clean);
    localStorage.setItem("items", JSON.stringify(clean));
    setItems(clean);
  };
  function getTotal(){
    if(localStorage.items==null){
      return 0;
    }
    let clone = [...JSON.parse(localStorage.getItem("items"))];
    let total = 0;
    for(let ob of clone){
      total += ob.price * ob.amount;
    }
    return total.toFixed(2)
  }
  useEffect(()=>{
    modifyCart();
  }, [localStorage.items]);

  return (
    <>
        <TopBar/>
        <h1 className={styles.topText}>Shopping Cart</h1>
        <div className={styles.article}>
        {
          (items.length==0) ? <h3 className={styles.looks}>Looks like you haven’t added anything yet! Browse our products and fill your cart with amazing finds at MetroMarket.</h3> : items.map((item)=>{
            return <Item_CART key={uuidv4()} id={item.id} name={item.name} amount={item.amount} price={item.price} image={item.thumbnail} remove={()=>removeItem(item.id)}></Item_CART>})
        }
        </div>
        <h1 className={styles.totalTxt}>Total: {getTotal()}</h1>
        <button className={styles.confirm} onClick={()=>navigate("/purchase")}>Confirm purchase</button>
    </>
  )
}

export default Cart