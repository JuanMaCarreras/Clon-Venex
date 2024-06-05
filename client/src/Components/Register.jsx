import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/authActions'

function Register () {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(userData))
  }

  return (
    <>
      <div className='border border-solid-2 border-red-600'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-wrap '
        >
          <input
            type='text'
            name='name'
            placeholder='Nombre*'
            value={userData.name}
            onChange={handleChange}
            className='w-[370px] h-[41px]'
          />
          <input
            type='email'
            name='email'
            placeholder='Dirección de email*'
            value={userData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Contraseña*'
            value={userData.password}
            onChange={handleChange}
          />
          <button type='submit'>Registrarme</button>
        </form>
      </div>
    </>
  )
}

export default Register
