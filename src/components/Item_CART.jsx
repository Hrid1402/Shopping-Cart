import React from 'react'

function Item_CART({id, name, amount,  price, image, remove}) {
  return (
    <div>
        <img src={image} alt={name + " image"} />
        <h2>{amount} {name}</h2>
        <h2>{price}$</h2>
        <button onClick={()=>remove(id)}>Remove</button>
    </div>
  )
}

export default Item_CART