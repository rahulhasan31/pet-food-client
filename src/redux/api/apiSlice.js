import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const api=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://pet-food-server.onrender.com"
    }),
    tagTypes:['review', 'addtoCart', 'myOrders','user', 'foods'],
    refetchOnFocus:3000,
    endpoints:()=>({})
    
})