import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from './slices/products.slice'
import userGlobal from './slices/user.slice'
import cartGlobal from './slices/cart.slice'

export  default configureStore({
    reducer:{
        productsGlobal,
        userGlobal,
        cartGlobal
    }
})