import React from 'react'
import TopBar from './components/TopBar'
import { useSearchParams } from 'react-router-dom';

function Item() {
 const [searchParams] = useSearchParams();
 console.log(searchParams.get("id"));
  return (
    <>
        <TopBar></TopBar>
        <div>Item!!</div>
        <h1>{searchParams.get("id")}</h1>
    </>
    
  )
}

export default Item