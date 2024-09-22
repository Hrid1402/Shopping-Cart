import { useEffect, useState } from 'react'
import AllProducts from './components/AllProducts'
import SearchBar from './components/SearchBar'
import TopBar from './components/TopBar'

function App() {
  const [url, setUrl] = useState("https://dummyjson.com/products?limit=150");
  const [searchedItem, setSearchedItem] = useState(null);
  

  function searchProducts(name, category){
    if(category==null){
      setUrl("https://dummyjson.com/products/search?q=" + name);
      setSearchedItem([name, false]);
    }else{
      setUrl("https://dummyjson.com/products/category/" + name);
      setSearchedItem([name, true]);
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
