import axios from 'axios'

// CAMBIAR URL DEL BACK (DEPLOY DB)
const BASE_URL = 'http://localhost:3000'

export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`)
  return response.data
}

export const searchProducts = async productName => {
  const response = await axios.get(`${BASE_URL}/products/${productName}`)
  return response.data
}

export const createProducts = async productData => {
  const response = await axios.post(`${BASE_URL}/products`, productData)
  return response.data
}

export const productID = async id => {
  const response = await axios.get(`${BASE_URL}/products/${id}`)
  return response.data
}
