import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/productsActions'

function ProductDetails () {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state => state.products.details)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch, productId])

  return (
    <>
      <div className='pl-16 py-7 border-solid border-b-2 border-gray-600'>
        <p>⬅ atras</p>
      </div>
      <article className='mb-96 mt-6 ml-11'>
        {
          details
            ? details.map(detail => (
              <div key={detail.id}>
                <h2 className='text-detailName font-light text-primaryGray font-montserrat'>{detail.name}</h2>
                <img
                  className='h-30rem w-36rem'
                  src={detail.img}
                  alt={detail.name}
                />
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
