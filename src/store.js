import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "./features/modal/modalSlice"
import { userApi } from "./features/user/userSlice"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)
