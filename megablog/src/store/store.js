import { combineReducers, configureStore } from "@reduxjs/toolkit"

import authReducer from './authSlice'
import postReducer from "./postSlice"

const rootReducer = combineReducers
({
    auth: authReducer,
    post: postReducer,
})

const store = configureStore({
reducer : rootReducer
})

export default store;