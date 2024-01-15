import { BsHeadset } from 'react-icons/bs'
import { FaRoute } from 'react-icons/fa'
import { PiMapPinFill } from 'react-icons/pi'

function CentroAyuda () {
  return (
    <>
      <div
        className='flex flex-row justify-end py-1.5 bg-secondaryGray'
      >
        <ul className='flex text-white'>
          <li><FaRoute className='w-4 h-6 text-venex' /></li>
          <li className='pr-14 pl-3'> Seguí tu compra  </li>

          <li><PiMapPinFill className='w-5 h-6 text-venex' /></li>
          <li className='pr-14 pl-3'> Retirá tu compra </li>

          <li><BsHeadset className='w-5 h-6 text-venex' /></li>
          <li className='pr-11 pl-3'>Centro de Ayuda</li>
        </ul>

      </div>
    </>
  )
}

export default CentroAyuda
