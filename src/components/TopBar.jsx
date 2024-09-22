import React from 'react'
import SearchBar from './SearchBar'
import styles from '../styles/topBar.module.css'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import { Link } from "react-router-dom"

function TopBar({setValue}) {
  return (
    <div className={styles.main}>
        <div className={styles.top}>
            <Link className={styles.logoText} to="/"><img className={styles.logo} src={logo} alt="Shop Logo" />
              <h1>Shop</h1>
            </Link>
            <SearchBar setValue={setValue}></SearchBar>
            <Link><img src={cart} alt="cart" className={styles.cart}/></Link>
        </div>
        
    </div>
  )
}

export default TopBar