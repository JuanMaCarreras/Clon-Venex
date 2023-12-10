import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlice'

function Card() {

    const dispatch = useDispatch()
    const products = useSelector(state => {
      console.log('Estado actualizado:', state.products.data)
      return state.products.data
    })

    useEffect(() => {

      dispatch(fetchProducts())
        .catch(error => {
          console.error('Error fetching products in component:', error)
        })

    },[dispatch])


  return (
    <>
      <h1>Productos</h1>



      {
        products ? (
          <ul>
            {
              products.map( (product) => {
                <li key={products.name}>{product.name}</li>
                
              })
            }
          </ul>
        ) : (
          <p>cagando...</p>
        )
      }
    
    

    </>
  )
}

export default Card
