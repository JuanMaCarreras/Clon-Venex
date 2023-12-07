import React from 'react'

function Card({name, price, img, description,}) {
  return (
    <>
        <h1>{name}</h1>
        <img src={img} alt='Imagen del Producto'></img>
        <p>{price}</p>
        <p>{description}</p>

    </>
  )
}

export default Card
