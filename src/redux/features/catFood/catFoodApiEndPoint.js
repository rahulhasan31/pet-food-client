import { api,  } from "../../api/apiSlice";

const catFoodApi = api.injectEndpoints({
  endpoints: (builder) => ({

    getCatFoods: builder.query({
      query: (search) => ({
        url: `http://localhost:3000/api/v1/cat-foods?search=${search}`,
      }),
      providesTags:['foods']
    }),
    getCatFoodsQueries: builder.query({
      query: (shop) => ({
        url: `http://localhost:3000/api/v1/cat-foods-query?shop=${shop}`,
      }),
      providesTags:["foods"]
    }),


    getSingleFood: builder.query({
      query: (id) => ({
        url: `/api/v1/cat-foods/${id}`,
      }),
    }),

    postReview:builder.mutation({
     query:( data)=>({
      url:`/api/v1/reviews`,
      method:"POST",
      body:data
     }),
     invalidatesTags:['review']
    }),

    getReviews:builder.query({
      query:(id)=>({
        url:`/api/v1/reviews/${id}`
      }),
      
      providesTags:['review']

    }),
    reviewDelete:builder.mutation({
      query:(id)=>({
        url:`/api/v1/reviews/${id}`,
        method:"DELETE",
          
      }),
      invalidatesTags:['review']
    }),
    updateReview:builder.mutation({
      query:({id, data})=>({
        url:`/api/v1/reviews/${id}`,
        method:"PATCH",
        body:data
      }),
      invalidatesTags:['review']
      
    }),
    
    getIdReview:builder.query({
      query:(id)=>({
        url:`/api/v1/review/${id}`
      }),
      providesTags:['review']
    }),

    getReviewsQuarys:builder.query({
      query:(email)=>({
        url:`/api/v1/reviews-quary?email=${email}`,
        headers:{
        authorization :`bearer ${localStorage.getItem("accessToken")}`
        }
      }),
      providesTags:['review']
    }),

    getAddToQuaryCart:builder.query({
      query:(email)=>({
      url:`/api/v1/add-to-cart/quary?email=${email}`,
      headers:{
        authorization :`bearer ${localStorage.getItem("accessToken")}`
          }
      }),
     providesTags:['addtoCart']
    }),

    postAddTOCart:builder.mutation({
      query:(data)=>({
        url:`/api/v1/add-to-cart`,
        method:"POST",
        body:data
      }),
      invalidatesTags:['addtoCart']
      
    }),

    postDecrement:builder.mutation({
      query:(data)=>({
        url:'/api/v1/decrement-cart-item',
        method:"POST",
        body:data
      }),
      invalidatesTags:['addtoCart']
    }),
    
    deleteAddCart:builder.mutation({
      query:(id)=>({
       url:`/api/v1/add-to-cart/${id}`,
       method:"DELETE"
      }),
      invalidatesTags:['addtoCart']
    }),

    myOrders:builder.query({
      query:(email)=>({
        url:`/my-payments?email=${email}`
      }),
      providesTags:['myOrders']
    }),

    postUsers:builder.mutation({
      query:(data)=>({
        url:`/api/v1/users`,
        method:"POST",
        body:data
      })
    }),
    getUserQueries:builder.query({
      query:(email)=>({
        url:`/api/user/query?email=${email}`,
        headers:{
        authorization :`bearer ${localStorage.getItem("accessToken")}`
        }
      }),
      providesTags:['user']
      
    }),

    updateUser:builder.mutation({
      query:({email,data})=>({
        url:`/api/user-update?email=${email}`,
        headers:{
         authorization :`bearer ${localStorage.getItem("accessToken")}`
          },
        method:"PATCH",
        body:data

      }),
      invalidatesTags:['user']
    }),

    getSeller:builder.query({
      query:()=>({
        url:'/api/seller',
      }),
      providesTags:['user']
    }),
    getAllUser:builder.query({
      query:()=>({
    url:"/api/all-user",
    headers:{
       authorization :`bearer ${localStorage.getItem("accessToken")}`
             },
      }),
      providesTags:['user']
    }),

  getAllPayment:builder.query({
    query:()=>({
      url:"/api/all-payment",
      headers:{
        authorization :`bearer ${localStorage.getItem("accessToken")}`
         },
    }),
    providesTags:['myOrders']
  }),

  putOrderConfirm:builder.mutation({
    query:(transactionId)=>({
      url:`/api/order-confirm/${transactionId}`,
      headers:{
        authorization :`bearer ${localStorage.getItem("accessToken")}`
         },
      method:"PUT",
      
    }),
    invalidatesTags:["myOrders"]
  
    
  }),
  postPayment:builder.mutation({
    query:(payment)=>({
      url:"/payments",
     method:"POST",
     body:payment
    }),
    invalidatesTags:["myOrders"]
  }),

  postFoods:builder.mutation({
    query:(data)=>({
      url:'/api/v1/add/cat-food-add',
      method:"POST",
      body:data

    }),
    invalidatesTags:['foods']
  }),

  deleteUsers:builder.mutation({
    query:(id)=>({
      url:`/api/seller/delete/${id}`,
      method:"DELETE"
      
    }),
    invalidatesTags:['user']
  }),
  sellerAddFood:builder.query({
    query:(email)=>({
      url:`http://localhost:3000/api/seller/foods?email=${email}`
    }),
    providesTags:['foods']
  }),
  deleteSellerFood:builder.mutation({
    query:(id)=>({
      url:`/api/seller-food/delete/${id}`,
      method:"DELETE"
    }),
    invalidatesTags:['foods']
  })

  }),
  
});

export const {
  useGetCatFoodsQuery,
  useGetSingleFoodQuery,
  useGetReviewsQuery,
  useReviewDeleteMutation,
  usePostReviewMutation,
  useUpdateReviewMutation,
  useGetIdReviewQuery,
  useGetReviewsQuarysQuery,
  useGetAddToQuaryCartQuery,
  usePostAddTOCartMutation,
  usePostDecrementMutation,
  useDeleteAddCartMutation,
  useMyOrdersQuery,
  usePostUsersMutation,
  useGetUserQueriesQuery,
  useUpdateUserMutation,
   useGetSellerQuery,
  useGetCatFoodsQueriesQuery,
  useGetAllUserQuery,
  useGetAllPaymentQuery,
  usePutOrderConfirmMutation,
  usePostPaymentMutation,
  usePostFoodsMutation,
  useDeleteUsersMutation,
  useSellerAddFoodQuery,
  useDeleteSellerFoodMutation
  
  
} = catFoodApi;
