import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



const initialState={
    foods:[],
    total:0,
    loading:false,
    error:''
}


export const fetchFood=createAsyncThunk('foods/fetchfood', async()=>{
    const res= await fetch('http://localhost:3000/api/v1/cat-foods')
    const data= await res.json()

    return data.data


})
export const addToCart = createAsyncThunk('foods/addToCart', async (item) => {
    const response = await fetch('http://localhost:3000/api/v1/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return response.json();
  });


const foodSlice=createSlice({
    name:"foods",
    initialState,
    extraReducers:(builder)=>{
 builder
 // eslint-disable-next-line no-unused-vars
 .addCase(addToCart.pending, (state, action)=>{
    state.loading=true,
    state.error=''
 })
 .addCase(addToCart.fulfilled, (state, action)=>{

    state.loading=false,
    state.error=''

    state.foods.push(action.payload)
   
 })
 .addCase(addToCart.rejected,(state,action)=>{
    state.loading=false
    state.error=action.error.message,
    state.foods=[]
 })
    }
})


export default foodSlice.reducer