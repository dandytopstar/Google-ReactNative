import { configureStore } from '@reduxjs/toolkit'

import $auth from './auth'

const store = configureStore({
  reducer: {
    $auth: $auth.reducer,
  },
})

export default store
