import React, { useEffect } from 'react'
import TopBar from './components/TopBar'
import styles from './styles/Profile.module.css';
import img1 from './assets/startPhotos/img1.jpg'
import img2 from './assets/startPhotos/img2.jpg'
import img3 from './assets/startPhotos/img3.jpg'
import img4 from './assets/startPhotos/img4.jpg'
import img5 from './assets/startPhotos/img5.jpg'
import img6 from './assets/startPhotos/img6.jpg'
import img7 from './assets/startPhotos/img7.jpg'
import img8 from './assets/startPhotos/img8.jpg'
import img9 from './assets/startPhotos/img9.jpg'
import img10 from './assets/startPhotos/img10.jpg'
import img11 from './assets/startPhotos/img11.jpg'
import img12 from './assets/startPhotos/img12.jpg'
import img13 from './assets/startPhotos/img13.jpg'
import img14 from './assets/startPhotos/img14.jpg'
import img15 from './assets/startPhotos/img15.jpg'

import shopBag from './assets/shopping2.png'
import github from './assets/githubICON.png'


let imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}


function Profile() {
  useEffect(()=>{
    shuffle(imgs);
  },[])
  return (
    <>
        <TopBar/>
        <article className={styles.main}>
            <h1 className={styles.welcome}>Welcome to <span className={styles.storeName}>MetroMarket</span>!</h1>
            <div className={styles.content}>
              <p>Your one-stop destination for everything you need. <br />Explore a wide range of products, from electronics and home essentials to fashion and beauty.  <br />Whether you're shopping for the latest gadgets or looking for everyday items, we've got you covered.  <br />With fast shipping, secure payments, and unbeatable customer service, MetroMarket makes online shopping simple and convenient.</p>
              <img src={shopBag}/>
            </div>
            <h2 className={styles.discover}>Discover Our Products</h2>
            <p className={styles.d_t}>From tech to style, find the products that suit your life. Shop with ease and discover great deals, all in one place!</p>
            <div className={styles.marquee}>
              <div className={styles.container}>
                {imgs.map((img, i)=>{
                    return< img key={i} className={styles.image} src={img} ey={i} />
                  })}
              </div>
              <div className={styles.container}>
                {imgs.map((img, i)=>{
                    return< img key={i} className={styles.image} src={img} ey={i} />
                  })}
              </div>
            </div>
        </article>
        <footer className={styles.p_footer}>
          <a href="https://github.com/Hrid1402"><p>Developed by Hrid1402</p><img src={github} alt="github" /></a>
        </footer>
    </> 
  )
}

export default Profile