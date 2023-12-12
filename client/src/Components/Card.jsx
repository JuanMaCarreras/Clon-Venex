import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlice'

function Card () {
  const dispatch = useDispatch()
  const products = useSelector(state => {
    return state.products.data
  })

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  console.log(products)

  return (
    <>
      <h1>Productos</h1>

      {
      products
        ? (
          <ul>
            {
              products.map(product => (
                <li key={product.id}>{product.name}</li>
              ))
            }
          </ul>
          )
        : (
          <p>cagando...</p>
          )
      }

    </>
  )
}

export default Card
