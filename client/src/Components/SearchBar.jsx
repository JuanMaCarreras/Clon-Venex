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
          className='w-1/2 h-11 rounded-l-md outline-none px-4'
        />

        <button
          type='submit'
          onClick={handlerSubmit}
          className='bg-white rounded-r-lg w-10 pr-11'
        ><FaMagnifyingGlass className='w-10 h-6 text-primaryGray ' />
        </button>
      </div>
    </>
  )
}

export default SearchBar
