import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { getToken } from "../../config/getToken";
const cartGlobal = createSlice({
    name:'cart',
    initialState:null,
    reducers:{
        setProducts: (state,action)=>action.payload,
        
    }
});

export const getCartThunk = ()=>(dispatch)=>{

    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getToken())
    .then(res =>{
         dispatch(setProducts(res.data.data.cart.products)) 
        })
    .catch(err => console.log(err))
}




export const  {setProducts,getCartSum} = cartGlobal.actions;
export default cartGlobal.reducer;