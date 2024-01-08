import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createProducts } from '../../api/api'

export const createProducts = createAsyncThunk('/products/createProducts', () => {

})

const initialState = {
    status: null,
    error: null
}

const createProductsSlice = createSlice({
    name: 'privateCreateProducts',
    initialState,
    reducers: {},
})

export default createProductsSlice.reducer
