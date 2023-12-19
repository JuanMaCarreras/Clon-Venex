function Card ({ product }) {
  if (!product) {
    return null
  }

  const { img, price, name } = product

  return (
    <>
      <div className='flex flex-col items-center justify-center  border-red-600 m-5 py-3 border'>
        <div className='bg-grey-600'>
          <img src={img} alt='img' className='h-52 w-52 ' />
        </div>
        <h2 className='text-xl'>${price}</h2>
        <p className='text-base  text-gray-500 truncate w-[500px]'>{name}</p>
        <span className=''>hola</span>
      </div>
    </>
  )
}
export default Card
