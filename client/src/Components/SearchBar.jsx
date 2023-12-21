import { useState } from 'react'
import { useDispatch } from 'react-redux'

function SearchBar () {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  const handlerChange = (e) => {
    const input = e.target.value
    console.log(input)
    setSearch(input)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h2>Search Bar</h2>
      <form onSubmit={handlerSubmit}>
        <input
          name='search'
          type='text'
          onChange={handlerChange}

        />

        <button type='submit'>Buscar</button>
      </form>

    </>
  )
}

export default SearchBar
