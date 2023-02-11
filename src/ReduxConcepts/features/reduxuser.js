import {createSlice} from "@reduxjs/toolkit"

export const userSlice =createSlice({
    name:"user",
    initialState:{value:{name:"test1",age:0,email:"test34"},
},
reducers:{
    loginredux:(state,action)=>{
        state.value=action.payload
    }
}
})
export default userSlice.reducer;
