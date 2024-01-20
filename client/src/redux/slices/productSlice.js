import { createSlice } from '@reduxjs/toolkit'
import {
  fetchProducts,
  searchProduct,
  productsForm,
  idProduct
} from '../actions/productsActions'

const initialState = {
  data: [],
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

      .addCase(idProduct.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
        state.error = null
      })
  }
})

export default productSlice.reducer
