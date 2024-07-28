import { configureStore } from '@reduxjs/toolkit'
import Auth from "./AuthSlice"
 const store = configureStore({
  reducer: {
    auth:Auth,

  },
})
export default  store

