import { useDispatch } from 'react-redux'

function CreateProduct () {
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    e.preventDefault()
    console.log(e.value.target)
  }

  const handleSubmit = () => {

  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-center py-16'>

        <label>Name:</label>
        <input
          type='text'
          name='name'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Price:</label>
        <input
          type='text'
          name='price'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        {/* <label>img:</label>
        <input type='text' /> */}

        <label>Description:</label>
        <textarea
          name='description'
          className='border border-blue-700'
          onChange={handleInputChange}
        />

        <label>Brand:</label>
        <input
          type='text'
          name='brand'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Stock:</label>
        <input
          type='text'
          name='stock'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Availability:</label>
        <input
          type='text'
          name='availability'
          onChange={handleInputChange}
          className='border border-blue-700'
        />
      </form>
    </>
  )
}

export default CreateProduct
