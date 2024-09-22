import React, { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import Item_CART from './components/Item_CART';
import { v4 as uuidv4 } from 'uuid';

function Cart() {
  const [items, setItems] = useState([])
  function modifyCart(){
    setItems((JSON.parse(localStorage.items)));
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
  useEffect(()=>{
    modifyCart();
  }, [localStorage.items]);

  return (
    <>
        <TopBar/>
        <h1>Shopping Cart</h1>
        {
          items.map((item)=>{
            return <Item_CART key={uuidv4()} id={item.id} name={item.name} amount={item.amount} price={item.price} image={item.thumbnail} remove={()=>removeItem(item.id)}></Item_CART>})
        }
    </>
  )
}

export default Cart