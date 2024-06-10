import { FaUser } from 'react-icons/fa6'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { IoIosCard } from 'react-icons/io'

function Auth () {
  return (
    <>
      <section className='flex mx-8 mt-11 '>
        <div classaName='flex jus'>
          <FaUser
            className='h-9 w-9 text-gray-400'
          />

          <h2
            className='text-2xl'
          >¡Te damos la bienvenida!
          </h2>
        </div>

        <div classaName='flex'>
          <FaUser
            className='h-9 w-9 text-gray-400'
          />
          <LiaShippingFastSolid
            className='h-9 w-9 text-gray-400'
          />
          <IoIosCard
            className='h-9 w-9 text-gray-400'
          />
        </div>
      </section>
    </>
  )
}

export default Auth
