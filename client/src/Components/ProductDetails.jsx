import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/productsActions'

function ProductDetails () {
  const { productId } = useParams()
  console.log(productId)
  const dispatch = useDispatch()
  const details = useSelector(state => state.products.details)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch, productId])

  return (
    <>
      <article className='mb-96 mt-24 ml-16'>
        {
      details
        ? details.map(detail => (
          <div key={detail.id}>
            <h2 className='text-2xl text-primaryGray font-montserrat'>{detail.name}</h2>
            <img src={detail.img} alt={detail.name} />
            <p>{detail.description}</p>
          </div>
        ))
        : <p>Cargando...</p>
      }
      </article>
    </>
  )
}

export default ProductDetails
