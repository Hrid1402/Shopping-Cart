import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/error.module.css';
import sadCat from './assets/sadCat.png'

function ErrorPage() {
  return (
    <div className={styles.main}>
        <h1>404</h1>
        <h2>Sorry, the page wasn't found, we apologize.</h2>
        <Link className={styles.back} to="/">Go back home</Link>
        <img className={styles.sad} src={sadCat}/>
    </div>
  )
}

export default ErrorPage