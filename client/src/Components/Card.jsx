import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlice'

function Card() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.data)

    console.log(products)

    useEffect(() => {

      dispatch(fetchProducts())
      console.log( products)

    },[dispatch])


  return (
    <>
      <h1>Productos</h1>
    
    

    </>
  )
}

export default Card
