import React from 'react'
import pfp from '../assets/pfp.png'
import styles from '../styles/Comment.module.css'

function Comment({name, comment, date, rating}) {
  return (
    <div className={styles.container}>
        <h5 className={styles.date}>{date}</h5>
        <div className={styles.user}>
            <img src={pfp}/>
            <h2>{name}</h2>
        </div>
        <h2 className={styles.stars}>{rating}⭐</h2>
        <h3 className={styles.content}>{comment}</h3>
        
    </div>
  )
}

export default Comment