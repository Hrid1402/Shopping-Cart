import React from 'react'
import SearchBar from './SearchBar'
import styles from '../styles/topBar.module.css'
import logo from '../assets/logo.png'

function TopBar({setValue}) {
  return (
    <div className={styles.main}>
        <div className={styles.top}>
            <div className={styles.logoText}>
                <img src={logo} alt="Shop Logo" />
                <h1>Shop</h1>
            </div>
            <SearchBar setValue={setValue}></SearchBar>
            <button onClick={() => setValue("test product")}>Search Product</button>
        </div>
        
    </div>
  )
}

export default TopBar