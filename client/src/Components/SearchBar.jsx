import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchProduct } from '../redux/actions/productsActions'

function SearchBar () {
  const dispatch = useDispatch()
  const [prductName, setPrductName] = useState('')

  const handlerChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    setPrductName(value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(searchProduct(prductName))
  }

  return (
    <>
      <div
        className='py-5 flex justify-center bg-primaryGray'
      >
        <input
          type='text'
          value={prductName}
          onChange={handlerChange}
          placeholder='Eso que querés.. buscalo acá'
          className='w-600px h-41px rounded-l-md outline-none px-4 border-1 border-gray-300'
        />

        <button
          type='submit'
          onClick={handlerSubmit}
          className='bg-white rounded-r-md border-1 border-gray-300 w-10 pr-11 pl-2'
        ><FaMagnifyingGlass className='w-10 h-6 text-primaryGray ' />
        </button>

      </div>
    </>
  )
}

export default SearchBar
