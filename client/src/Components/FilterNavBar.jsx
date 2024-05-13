import { IoIosArrowDown } from 'react-icons/io'

function FilterNavBar () {
  return (
    <>
      <ul className='flex flex-row justify-between py-16px px-14 bg-white'>
        <li
          className='flex items-center font-semibold border-r border-solid border-gray-300 pr-5'
        >CATEGORÍAS <IoIosArrowDown className='ml-1 text-venex' />
        </li>
        <li
          className='font-montserrat text-primaryGray '
        >PCs de Escritorio
        </li>
        <li
          className='font-montserrat text-primaryGray'
        >Notebooks
        </li>
        <li
          className='font-montserrat text-primaryGray'
        >Placas de Videos
        </li>
        <li
          className='font-montserrat text-primaryGray'
        >Monitores
        </li>
        <li
          className='font-montserrat text-primaryGray'
        >Micros
        </li>
        <li
          className='font-montserrat text-primaryGray'
        >¡Imperdibles!
        </li>
        <li
          className='font-montserrat text-primaryGray'
        >
          | Arma tu PC |
        </li>
        <li
          className='font-semibold font-montserrat'
        >VX | CORPORATIVO
        </li>
      </ul>
    </>
  )
}

export default FilterNavBar
