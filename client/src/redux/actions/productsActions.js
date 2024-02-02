import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getAllProducts,
  searchProducts,
  createProducts,
  productID
} from '../../api/api'

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

export const productsForm = createAsyncThunk('/creteProducts', async productData => {
  try {
    const res = await createProducts(productData)
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
})

export const getProductById = createAsyncThunk('/:id', async productId => {
  try {
    const res = await productID(productId)
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
})
