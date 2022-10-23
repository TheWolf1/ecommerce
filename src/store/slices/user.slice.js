import { createSlice } from "@reduxjs/toolkit";

const userGlobal = createSlice({
    name:'user',
    initialState:'',
    reducers:{
        setUser: (state,action)=>action.payload
    }
});


export const {setUser} = userGlobal.actions;
export default userGlobal.reducer;