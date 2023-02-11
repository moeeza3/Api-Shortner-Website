import { configureStore } from '@reduxjs/toolkit'
import shortlyReducer from './shortlySlice'

export const store=configureStore({
    reducer: {
        short: shortlyReducer
    },
})