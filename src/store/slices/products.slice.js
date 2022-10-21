import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const products = createSlice({
    name:"products",
    initialState:null,
    reducers:{
        setProductGlobal: (state, action)=> action.payload
    }
});


export const getProductsThunk = ()=>(dispatch)=>{
    const baseUrl = "https://ecommerce-api-react.herokuapp.com/api/v1/products"
    return axios.get(baseUrl)
        .then(res=>dispatch(setProductGlobal(res.data.data.products)))
        .catch(err=>console.log(err))
}

export const {setProductGlobal} = products.actions;
export default products.reducer;