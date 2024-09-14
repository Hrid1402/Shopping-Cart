import React from 'react'
import styles from '../styles/searchBar.module.css'
import { useState } from "react";
function SearchBar({setValue}){
  const [inputValue, setInputValue] = useState('');
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
    <input className={styles.bar} placeholder='What are you looking for?' onKeyDown={_handleKeyDown} type="text" value={inputValue} onChange={handleInputChange}/>
  )
}

export default SearchBar