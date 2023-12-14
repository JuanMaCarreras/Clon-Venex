import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlice'
import Card from './Card'

function Data () {
  const dispatch = useDispatch()
  const products = useSelector(state => {
    console.log('Estado redux', state.products.data)
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
          <Card key={product.id} product={product} />

        ))
        : (
          <p>cagando...</p>
          )
      }

    </>
  )
}

export default Data
