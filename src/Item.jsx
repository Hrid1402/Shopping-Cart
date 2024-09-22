import React, { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import { useSearchParams } from 'react-router-dom';
import styles from './styles/Item.module.css';
import Comment from './components/Comment.jsx';

function Item() {
    const [searchParams] = useSearchParams();
    const [url] = useState("https://dummyjson.com/products/" + searchParams.get("id"));
    const [item, setItem] = useState(null);
    useEffect(()=>{
        fetch(url)
          .then((response) => response.json())
          .then((response) => setItem(response))
          .catch((error) => console.error(error));
    }, [url])

  return (
    <>
        <TopBar></TopBar>
        {item && (
        <>
            <article>
                <div className={styles.imgContainer}>
                    <img src={item.images[0]} className={styles.picture}/>
                </div>
                <div>
                    <h3>Category: {item.category}</h3>
                    <div className={styles.tags}>
                        <h4>Tags: </h4>
                    {   
                        item.tags.map((t, i)=> {return <h4 key={i}>{t}</h4 >})
                    }
                    </div>
                    
                    <h1>{item.title}</h1>
                    {(item.brand) ? <h2>{item.brand}</h2> : <h2>Generic</h2>}
                    <h2>Price: {item.price}</h2>
                    <h3>{item.description}</h3>
                    <h3>Rating: ⭐ {item.rating}</h3>
                    <h3>{item.shippingInformation}</h3>
                    <h3>{item.warrantyInformation}</h3>
                </div>
            </article>
            <h2 className={styles.reviewText}>Reviews</h2>
            <div className={styles.reviews}>
                {item.reviews.map((r)=>{return <Comment name={r.reviewerName} comment={r.comment} date={r.date} rating={r.rating}></Comment>})}
                
            </div>
        </>
        )}
        
    </>
    
  )
}

export default Item