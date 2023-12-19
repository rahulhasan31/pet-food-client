import { createSlice } from "@reduxjs/toolkit";


const initialState={
    foods:[],
    total:0
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const exsiting=state.foods.find((food)=>food._id===action.payload._id)

            if(exsiting){
                exsiting.quantity=exsiting.quantity+1
            }
            else{
                state.foods.push({...action.payload, quantity:1})
            }
            state.total+=action.payload.price
            
        },

        oneRemovecart:(state, acction)=>{
            const exsiting=state.foods.find((food)=> food._id === acction.payload._id)

        if(exsiting && exsiting.quantity > 1){
            exsiting.quantity = exsiting.quantity -1
        }
        else{
          state.foods=state.foods.filter((food)=> food._id !== acction.payload._id)

        }
       state.total -=acction.payload.price
        },

        removeFromCart:(state, action)=>{
            state.foods=state.foods.filter((food)=> food._id !==action.payload._id)


            state.total -= action.payload.price * action.payload.quantity




        }

    
    }
})



export const {
    addToCart,
    oneRemovecart,
    removeFromCart

}=cartSlice.actions

export default cartSlice.reducer