import React from 'react'
import SearchBar from './SearchBar'
import styles from '../styles/topBar.module.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

function TopBar({setValue}) {
  return (
    <div className={styles.main}>
        <div className={styles.top}>
            <Link className={styles.logoText} to="/"><img src={logo} alt="Shop Logo" />
              <h1>Shop</h1>
            </Link>
            <SearchBar setValue={setValue}></SearchBar>
            
        </div>
        
    </div>
  )
}

export default TopBar