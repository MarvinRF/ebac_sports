import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
