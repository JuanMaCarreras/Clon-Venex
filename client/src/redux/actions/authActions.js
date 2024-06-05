import { createAsyncThunk } from '@reduxjs/toolkit'
import * as authUser from '../../api/api.auth'

export const registerUser = createAsyncThunk('/auth/register', async userData => {
  try {
    const res = await authUser.registerUser(userData)
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
})

export const loginUser = createAsyncThunk('/auth/login', async userData => {
  try {
    const res = await authUser.loginUser(userData)
    return res
  } catch (error) {
    console.log(error)
    throw error
  }
})
