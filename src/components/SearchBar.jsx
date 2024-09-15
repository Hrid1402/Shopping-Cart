import React from 'react'
import styles from '../styles/searchBar.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({setValue=null}){
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setValue(inputValue);
      console.log(inputValue);
    }
  }
  return (
    setValue==null ? 
    <input className={styles.bar} placeholder='What are you looking for?' type="text" onClick={()=>navigate("/products")}/>
    :
    <input autoFocus className={styles.bar} placeholder='What are you looking for?' onKeyDown={_handleKeyDown} type="text" value={inputValue} onChange={handleInputChange}/>
  )
}

export default SearchBar