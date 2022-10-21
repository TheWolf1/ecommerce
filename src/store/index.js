import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from './slices/products.slice'
export  default configureStore({
    reducer:{
        productsGlobal
    }
})