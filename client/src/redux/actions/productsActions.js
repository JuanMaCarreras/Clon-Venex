import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllProducts, searchProducts } from '../../api/api'

export const fetchProducts = createAsyncThunk('/products/fetchProducts', async () => {
    try {
        const res = await getAllProducts()
        return res
    } catch (error) {
        console.log(error)
        throw error
    }
}
)

export const searchProduct = createAsyncThunk('/products/searchProducts', async (productName, { rejectedWithValue }) => {
    try {
        const res = await searchProducts(productName)
        return res
    } catch (error) {
        return rejectedWithValue(error)
    }
})
