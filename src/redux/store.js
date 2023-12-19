import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'

import cartSlice from './cart/cartSlice'
import filterSlice from './features/filter/filterSlice'
import foodSlice from "./thunk/addfoods"

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    food:foodSlice,
    filter:filterSlice,
  [api.reducerPath]:api.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

