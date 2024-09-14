import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AllProducts from './components/AllProducts'
import SearchBar from './components/SearchBar'
import TopBar from './components/TopBar'

function App() {
  const [url, setUrl] = useState("https://dummyjson.com/products?limit=100");
  

  function searchProducts(name){
    setUrl("https://dummyjson.com/products/search?q=" + name);
  }
  return (
    <>
      <TopBar setValue={searchProducts}></TopBar>
      
      <AllProducts url={url}></AllProducts>
    </>
  )
}

export default App
