import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cartSlice'
import authApi from './features/authApi'
import authReducer from './features/authSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartReducer,
      [authApi.reducerPath]: authApi.reducer,
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']