import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import authReducer from './features/authSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      auth: authReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']