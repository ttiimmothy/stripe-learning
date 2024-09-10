import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cartSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']