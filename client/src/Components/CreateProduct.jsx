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
      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type='text'
          onChange={handleInputChange}
        />

        <label>Price:</label>
        <input
          type='text'
          onChange={handleInputChange}
        />

        {/* <label>img:</label>
        <input type='text' /> */}

        <label>Description:</label>
        <input
          type='text'
          onChange={handleInputChange}
        />

        <label>Category:</label>
        <input
          type='text'
          onChange={handleInputChange}
        />

        <label>Brand:</label>
        <input
          type='text'
          onChange={handleInputChange}
        />

        <label>Stock:</label>
        <input
          type='text'
          onChange={handleInputChange}
        />

        <label>Availability:</label>
        <input
          type='text'
          onChange={handleInputChange}
        />
      </form>
    </>
  )
}

export default CreateProduct
