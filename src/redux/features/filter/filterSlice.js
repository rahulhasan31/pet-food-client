import { createSlice } from "@reduxjs/toolkit";


const initialState={
    tags:[],
    search:""
}

export const filterSlice=createSlice({
    name:"filter",
    initialState,
   reducers:{
    tagsSelected:(state, action)=>{
        state.tags.push(action.payload)
    },
    tagsRemove:(state, action)=>{
        const indexToRemove=state.tags.indexOf(action.payload)

        if(indexToRemove !== -1){
            state.tags.splice(indexToRemove, 1)
        }

    },


    searched:(state, action)=>{
        state.search=action.payload

    }

   }
})



export const {
    tagsSelected,
    tagsRemove,
    searched

}=filterSlice.actions

export default filterSlice.reducer