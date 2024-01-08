// import { useEffect, useState } from 'react'

function CreateProduct () {
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
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Price:</label>
        <input
          type='text'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        {/* <label>img:</label>
        <input type='text' /> */}

        <label>Description:</label>
        <input
          type='text'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Category:</label>
        <input
          type='text'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Brand:</label>
        <input
          type='text'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Stock:</label>
        <input
          type='text'
          onChange={handleInputChange}
          className='border border-blue-700'
        />

        <label>Availability:</label>
        <input
          type='text'
          onChange={handleInputChange}
          className='border border-blue-700'
        />
      </form>
    </>
  )
}

export default CreateProduct
