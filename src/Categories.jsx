import React from 'react'
import TopBar from './components/TopBar'

const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ]
function Categories() {
  return (
    <>
        <TopBar></TopBar>
        <h1>Categories</h1>
        <div>
            {categories.map((c)=>{
                return <li>{c}</li>
            })
            }

        </div>
    </>
    
  )
}

export default Categories