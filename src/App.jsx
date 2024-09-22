import { useEffect, useState } from 'react'
import AllProducts from './components/AllProducts'
import SearchBar from './components/SearchBar'
import TopBar from './components/TopBar'

function cleanText(text){
  let words = text.split("-");
  let cleanText = ""
  for(let w of words){
    cleanText += w[0].toUpperCase() + w.slice(1) + " ";
  }
  return cleanText.slice(0,-1)
}

function App() {
  const [url, setUrl] = useState("https://dummyjson.com/products?limit=150");
  const [searchedItem, setSearchedItem] = useState(null);
  

  function searchProducts(name, category){
    if(category==null){
      setUrl("https://dummyjson.com/products/search?q=" + name);
      setSearchedItem([name, false]);
    }else{
      setUrl("https://dummyjson.com/products/category/" + name);
      setSearchedItem([cleanText(name), true]);
    }
    
  }
  return (
    <>
      <TopBar setValue={searchProducts}></TopBar>
      
      <AllProducts url={url} search={searchedItem}></AllProducts>
    </>
  )
}

export default App
