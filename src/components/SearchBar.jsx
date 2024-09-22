import React from 'react'
import styles from '../styles/searchBar.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import category from '../assets/category.png'
import searchIcon from "../assets/searchICON.png"



const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
]

function SearchBar({setValue=null}){
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchProcess();
    }
  }

  function searchProcess(category){
    if(category == null){
      setValue(inputValue);
      console.log(inputValue);
    }else{
      setInputValue("");
      setValue(category, true)
      console.log("#CATEGORY: " + category)
    }
 
  }

  return (
    setValue==null ? 
    <div className={styles.containerBar}>
      <input className={styles.bar} placeholder='What are you looking for?' type="text" onClick={()=>navigate("/products")}/>
      <img src={searchIcon} alt="Search" className={styles.search} onClick={()=>navigate("/products")}/>
    </div>
    
    :
    <div className={styles.containerBar}>
      <button className={styles.categories} >
        <img src={category} alt="Categories" />
        <ul>
          {
            categories.map((c, i)=>{
                  return <li key={i} onClick={()=>searchProcess(c)}>{c}</li>
              })
            }
        </ul>
      </button>
      <input autoFocus className={styles.bar} placeholder='What are you looking for?' onKeyDown={_handleKeyDown} type="text" value={inputValue} onChange={handleInputChange}/>
      <img src={searchIcon} alt="Search" className={styles.search} onClick={() => searchProcess()}/>
    </div>
    )
}

export default SearchBar