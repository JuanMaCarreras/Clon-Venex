import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { productsForm } from '../redux/actions/productsActions'

function CreateProduct () {
  const dispatch = useDispatch()

  const [productData, setProductData] = useState({
    name: '',
    price: '',
    img: '',
    description: '',
    category: '',
    brand: '',
    stock: '',
    availability: true
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(productsForm(productData))
  }

  const submitButton = (e) => {
    alert('Producto Creado')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-center py-16'>

        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={productData.name}
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Price:</label>
        <input
          type='text'
          name='price'
          value={productData.price}
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>img:</label>
        <input
          type='text'
          name='img'
          value={productData.img}
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Description:</label>
        <textarea
          name='description'
          value={productData.description}
          className='border border-blue-700'
          onChange={handleInputChange}
        />

        <label>Category:</label>
        <input
          type='text'
          name='category'
          value={productData.category}
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Brand:</label>
        <input
          type='text'
          name='brand'
          value={productData.brand}
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Stock:</label>
        <input
          type='text'
          name='stock'
          value={productData.stock}
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Availability:</label>
        <input
          type='checkbox'
          name='availability'
          value={productData.availability}
          onChange={handleInputChange}
          className='border border-blue-700'
        />
        <button
          className='my-5'
          type='submit'
          onClick={submitButton}
        >Enviar
        </button>
      </form>
    </>
  )
}

export default CreateProduct
