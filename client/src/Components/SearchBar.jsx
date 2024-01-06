import { useState } from 'react'
import { useDispatch /* useSelector */ } from 'react-redux'
import { searchProduct } from '../redux/slices/productSlice'

function SearchBar () {
  const dispatch = useDispatch()
  // const searchedProduct = useSelector((state) => state.products.searchProduct)
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

      {/* {
      searchedProduct.map(product => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} />
          <p>{product.price}</p>
          <p>{product.name}</p>
        </div>
      ))
      } */}

    </>
  )
}

export default SearchBar
