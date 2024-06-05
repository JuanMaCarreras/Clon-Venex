import { createSlice } from '@reduxjs/toolkit'
import * as authFn from '../actions/authActions'

const initialState = {
  isAutehticator: false,
  data: [],
  toke: null,
  status: null,
  error: null

}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authFn.registerUser.fulfilled, (state, action) => {
        state.isAutehticator = true
        state.data = action.payload.data
        state.toke = action.payload.toke
      })
      .addCase(authFn.registerUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(authFn.loginUser.fulfilled, (state, action) => {
        state.isAutehticator = true
        state.data = action.payload.data
        state.toke = action.payload.toke
      })
      .addCase(authFn.loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export default authSlice.reducer
