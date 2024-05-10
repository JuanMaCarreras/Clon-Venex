import { NavLink } from 'react-router-dom'

function Card ({ product }) {
  if (!product) {
    return null
  }

  const { id, img, price, name } = product

  return (
    <>
      <NavLink to={`/products/${id}`}>
        <article
          className='flex flex-col items-center justify-center m-5 w-72 border-gray-300 border-[1px] rounded-lg hover:border-venex '
        >
          <img
            src={img}
            alt={name}
            className='h-56 w-56 bg-transparent'
          />

          <div className='pt-4 pb-2 px-4'>
            <h3 className='text-sm text-center text-gray-500 break-words'>{name}</h3>
            <h2 className='text-2xl font-medium py-2'>${price}</h2>
          </div>
        </article>
      </NavLink>
    </>
  )
}
export default Card
