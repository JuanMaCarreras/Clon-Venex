import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchProduct } from '../redux/slices/productSlice'

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
      <h2>Search Bar</h2>

      <input
        type='text'
        value={prductName}
        onChange={handlerChange}
        className='border border-red-500'
      />

      <button type='submit' onClick={handlerSubmit}>Buscar</button>

    </>
  )
}

export default SearchBar
