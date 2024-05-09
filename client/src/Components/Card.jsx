import { NavLink } from 'react-router-dom'

function Card ({ product }) {
  if (!product) {
    return null
  }

  const { id, img, price, name } = product

  return (
    <>
      <NavLink to={`/products/${id}`}>
        <article className='flex flex-col justify-center m-2 py-5 w-60 bg-green-500'>
          <div className='bg-gray-300'>
            <img src={img} alt='img' className='h-52 w-full ' />
          </div>

          <div className='bg-red-400 w-auto'>
            <h2 className='text-2xl font-medium'>${price}</h2>
            <h3 className='text-sm text-center text-gray-500 break-words'>{name}</h3>
          </div>
        </article>
      </NavLink>
    </>
  )
}
export default Card
