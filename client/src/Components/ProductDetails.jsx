import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/productsActions'

function ProductDetails () {
  const dispatch = useDispatch()
  const details = useSelector(state => state.products)
  const { productid } = useParams()
  console.log(useParams())

  useEffect(() => {
    dispatch(getProductById(productid))
    console.log(productid)
  }, [dispatch, productid])

  return (
    <>
      {
        details && <h1>{ProductDetails.name}</h1>

      }
    </>
  )
}

export default ProductDetails
