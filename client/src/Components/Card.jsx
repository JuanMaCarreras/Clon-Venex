function Card ({ product }) {
  if (!product) {
    return null
  }

  const { img, price, name } = product

  return (
    <>
      <div className='flex flex-col items-center justify-center border-red-600 m-5 py-3 border'>
        <div className=''>
          <img src={img} alt='img' className='h-52 w-52 ' />
        </div>
        <div className=''>
          <h2 className='text-xl'>${price}</h2>
          <h3 className='text-base text-center  text-gray-500 truncate w-[500px]'>{name}</h3>
        </div>
      </div>
    </>
  )
}
export default Card
