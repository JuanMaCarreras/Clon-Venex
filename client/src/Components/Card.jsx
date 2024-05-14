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
          className='flex flex-col items-center justify-cente  m-3 w-72 border-gray-300 border-[1px] rounded-lg hover:border-venex shadow-lg'
        >
          <div className='bg-blue-400'>
            <img
              src={img}
              alt={name}
              className='h-52 w-52'
            />
          </div>

          <div className='pt-5 pb-3 px-4 bg-gray-200 rounded-b-lg'>
            <h3 className='text-sm text-center text-gray-500 break-words'>{name}</h3>
            <h2 className='text-2xl font-medium py-2'>${price}</h2>
          </div>
        </article>
      </NavLink>
    </>
  )
}
export default Card
