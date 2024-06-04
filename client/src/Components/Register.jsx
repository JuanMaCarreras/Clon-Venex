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
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Nombre*'
          value={userData.name}
          onChange={handleChange}
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
    </>
  )
}

export default Register
