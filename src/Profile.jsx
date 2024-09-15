import React from 'react'
import TopBar from './components/TopBar'
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
shuffle(imgs)

function Profile() {
  return (
    <>
        <TopBar/>
        <div>
            <h1>HELLO </h1>
            <marquee>
                {imgs.map((img, i)=>{
                    return <img src={img} height={"160px"} key={i}/>
                })}
                
            </marquee>
        </div>
    </> 
  )
}

export default Profile