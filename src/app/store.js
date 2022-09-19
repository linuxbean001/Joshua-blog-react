import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from '../services/post';
import  reducersApi from '../redux/reducers/index'

// export const store = configureStore({
//     reducer:{
//         [reducersApi.reducerPath]:reducersApi.reducer
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(reducersApi.middleware),
// })
export const store = configureStore({reducer:reducersApi},)

setupListeners(store.dispatch)