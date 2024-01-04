import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../redux/slices/productSlice'

function SearchBar () {
  const dispatch = useDispatch()
  const searchedProduct = useSelector((state) => state.products.searchedProduct)
  const [prductName, setPrductName] = useState('')

  const handlerChange = (e) => {
    const value = e.target.value
    console.log(value)
    setPrductName(value)
    console.log(prductName)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(searchProduct(prductName))
    console.log(searchedProduct)
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

      {
      searchedProduct && (
        <div>
          <h2>{searchedProduct.name}</h2>
          <p>{searchedProduct.img}</p>
          <p>Precio: {searchedProduct.price}</p>
          console.log(searchedProduct)
        </div>
      )
      }

    </>
  )
}

export default SearchBar
