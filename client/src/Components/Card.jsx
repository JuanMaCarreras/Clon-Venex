import { NavLink } from 'react-router-dom'

function Card ({ product }) {
  if (!product) {
    return null
  }

  const { id, img, price, name } = product

  return (
    <>
      <NavLink to={`/products/${id}`}>
        <article className='flex flex-col justify-center m-5 py-5 bg-green-500'>
          <div className='bg-gray-300'>
            <img src={img} alt='img' className='h-52 w-52 ' />
          </div>

          <div className='bg-red-400'>
            <h2 className='text-2xl font-medium'>${price}</h2>
            <h3 className='text-sm text-gray-500 max-w-xl'>{name}</h3>
          </div>
        </article>
      </NavLink>
    </>
  )
}
export default Card
