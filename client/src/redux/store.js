import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productSlice'
import createProductsSlice from './slices/privateCreateProducts'

const store = configureStore({
    reducer: {
        products: productsReducer,
        createProducts: createProductsSlice
    }
})

export default store
