import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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

export const searchProduct = createAsyncThunk('/products/searchProducts', async (productName) => {
  try {
    const res = await searchProducts(productName)
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
})

const initialState = {
  data: [],
  status: '',
  error: null,
  searchProduct: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.searchProduct = action.payload
      })
  }
})

export default productSlice.reducer
