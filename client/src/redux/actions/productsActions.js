import { createAsyncThunk } from '@reduxjs/toolkit'
import * as productsfn from '../../api/api.products'

export const fetchProducts = createAsyncThunk('/products/fetchProducts', async () => {
  try {
    const res = await productsfn.getAllProducts()
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
}
)

export const searchProduct = createAsyncThunk('/products/searchProducts', async (productName, { rejectedWithValue }) => {
  try {
    const res = await productsfn.searchProducts(productName)
    return res
  } catch (error) {
    return rejectedWithValue(error)
  }
})

export const productsForm = createAsyncThunk('/creteProducts', async productData => {
  try {
    const res = await productsfn.createProducts(productData)
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
})

export const getProductById = createAsyncThunk('/:id', async productId => {
  try {
    const res = await productsfn.productID(productId)
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
})
