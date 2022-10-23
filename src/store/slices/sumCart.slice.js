import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../config/getToken";



const sumCart = createSlice({
    name:'sumCart',
    initialState:0,
    reducers:{
        setSumCart: (state, action)=>action.payload
    }
})


export const getSumCartThunk = ()=> (dispatch)=>{
    let precio = 0;
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getToken())
                    .then(res=>{
                        res.data.data.cart.products.map(produc=>{
                            precio += (parseFloat(produc.price) * parseFloat(produc.productsInCart.quantity))
                            
                            
                        })
                        //console.log(precio);
                        dispatch(setSumCart(precio));
                        //console.log(res.data.data.cart.products);
                    })
                    .catch(err=>console.log(err))
}


export const {setSumCart} = sumCart.actions;
export default sumCart.reducer;