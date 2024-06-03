import SearchBar from './SearchBar'
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import FilterNavBar from './FilterNavBar'
import TopBar from './TopBar'
import { NavLink } from 'react-router-dom'

function NavBar () {
  return (
    <>

      <TopBar />
      <nav className=' bg-primaryGray flex flex-row items-center justify-around h-[84px]'>
        <div className=''>
          <NavLink to='/'>
            <img
              src='https://www.venex.com.ar/fil/logo/header_logo_nuevo.png'
              alt='#'
              className='h-24 w-72 object-cover flex-shrink-0'
            />
          </NavLink>
        </div>
        <div className=''>
          <SearchBar />
        </div>
        <ul className='flex flex-row items-center pr-2'>
          <li className='text-gray-100 pr-5 font-montserrat'>Bienvenida/o Usuario</li>
          <li className='text-gray-300 pr-5 text-2xl'><FaRegHeart /></li>
          <li className='text-gray-300 text-3xl'><FaShoppingCart /></li>
        </ul>
      </nav>

      <FilterNavBar />
    </>
  )
}

export default NavBar
