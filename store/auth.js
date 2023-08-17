import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const appSlice = createSlice({
  name: '$auth',

  initialState: {
    token: null,
  },

  reducers: {
    token: (state, {payload}) => {
      state.token = payload
      if (payload) {
        AsyncStorage.setItem('token', payload)
      } else {
        AsyncStorage.removeItem('token')
      }
    }
  },
})

export const get = {
  
}

export default {
  reducer: appSlice.reducer,
  set: appSlice.actions,
  get,
}