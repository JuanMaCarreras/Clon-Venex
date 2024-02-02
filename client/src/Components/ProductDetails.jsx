import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/productsActions'

function ProductDetails () {
  const { productId } = useParams()
  console.log(productId)
  const dispatch = useDispatch()
  const details = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch, productId])

  return (
    <>
      {
      details && details.map(detail => (
        <div key={detail.id}>
          <h2>{detail.name}</h2>
          <p>{detail.description}</p>
          <p>Precio: ${detail.price}</p>
        </div>
      ))
      }
    </>
  )
}

export default ProductDetails
