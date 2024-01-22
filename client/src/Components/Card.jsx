import { NavLink } from 'react-router-dom'

function Card ({ product, id }) {
  if (!product) {
    return null
  }

  const { img, price, name } = product

  return (
    <>
      <NavLink to={`/products/${id}`}>
        <article className='flex flex-col items-center justify-center m-5 py-5 '>
          <img src={img} alt='img' className='h-52 w-52 ' />
          <h2 className='text-2xl font-medium'>${price}</h2>
          <h3 className='text-sm text-gray-500 max-w-xl'>{name}</h3>
        </article>
      </NavLink>
    </>
  )
}
export default Card
