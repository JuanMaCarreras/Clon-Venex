import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlice.js'
import Card from './Card.jsx'

function Data () {
  const dispatch = useDispatch()
  const products = useSelector(state => {
    return state.products.data
  })
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      {
      products
        ? products.map(product => (
          <Card
            key={product.id}
            product={product}
          />

        ))
        : (
          <p>cagando...</p>
          )
      }
    </>
  )
}

export default Data
