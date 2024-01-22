import { createSlice } from '@reduxjs/toolkit'
import {
  fetchProducts,
  searchProduct,
  productsForm,
  getProductById
} from '../actions/productsActions'

const initialState = {
  data: [],
  details: [],
  status: null,
  error: null
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
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
        state.error = null
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(productsForm.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
        state.error = null
      })
      .addCase(productsForm.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })

      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.details = action.payload
        state.error = null
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export default productSlice.reducer
