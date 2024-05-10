import { NavLink } from 'react-router-dom'

function Card ({ product }) {
  if (!product) {
    return null
  }

  const { id, img, price, name } = product

  return (
    <>
      <NavLink to={`/products/${id}`}>
        <article className=' flex flex-col justify-center m-5 w-80 border-2 rounded-lg'>
          <img src={img} alt={name} className='h-60 w-60' />

          <div className=' pt-4 pb-2 px-8'>
            <h3 className='text-sm text-center text-gray-700 break-words'>{name}</h3>
            <h2 className='text-2xl font-medium'>${price}</h2>
          </div>
        </article>
      </NavLink>
    </>
  )
}
export default Card
