import { NavLink } from 'react-router-dom'
import { BsHeadset } from 'react-icons/bs'
import { FaRoute } from 'react-icons/fa'
import { PiMapPinFill } from 'react-icons/pi'

function TopBar () {
  return (
    <>
      <div
        className='flex flex-row justify-end py-1.5 bg-secondaryGray'
      >
        <ul className='flex text-white font-montserrat'>
          <li><FaRoute className='w-4 h-6 text-venex ' /></li>
          <li className='pr-11 pl-3 text-15px '> Seguí tu compra  </li>

          <li><PiMapPinFill className='w-5 h-6 text-venex' /></li>
          <li className='pr-11 pl-3 text-15px '> Retirá tu compra </li>
          <li><BsHeadset className='w-5 h-6 text-venex' /></li>
          <NavLink to='/centro-de-ayuda'>
            <li className='pr-9 pl-3 text-15px '>Centro de Ayuda</li>
          </NavLink>
        </ul>

      </div>
    </>
  )
}

export default TopBar
