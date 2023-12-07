import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const api = {
    getAllProducts: async () => {
        const response = await axios.get(`${BASE_URL}/products`)
        return response.data
    },
    searchProducts: async name => {
        const response = await axios.get(`${BASE_URL}/products/${name}`)
        return response.data
    },
    createProducts: async productData => {
        const response = await axios.post(`${BASE_URL}/products`, productData)
        return response.data
    },
}

export default api
