import { Link } from 'react-router-dom'

function Card ({ product, id }) {
  if (!product) {
    return null
  }

  const { img, price, name } = product

  return (
    <>
      <Link to={`/products/${id}`}>
        <article className='flex flex-col items-center justify-center border-red-600 m-5 py-5 border-'>
          <img src={img} alt='img' className='h-52 w-52 ' />
          <h2 className='text-2xl font-medium'>${price}</h2>
          <h3 className='text-sm text-gray-500 max-w-xl'>{name}</h3>
        </article>
      </Link>
    </>
  )
}
export default Card
