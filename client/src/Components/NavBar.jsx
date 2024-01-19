import SearchBar from './SearchBar'
import TopBar from './TopBar'

function NavBar () {
  return (
    <>

      <TopBar />
      <nav className=' bg-primaryGray items-center '>
        <div>
          <SearchBar />
        </div>
        <ul className='flex  justify-end'>
          <li className='text-white'>Usuario</li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
