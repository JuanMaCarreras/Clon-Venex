import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const registerUser = async userData => {
  const response = await axios.post(`${BASE_URL}/auth/signup`, userData)
  return response.data
}

export const loginUser = async userData => {
  const response = await axios.post(`${BASE_URL}/auth/signin`, userData)
  return response.data
}
