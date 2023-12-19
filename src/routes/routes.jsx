import { createBrowserRouter } from "react-router-dom";
import AddFoods from "../component/AddFoods/AddFoods";
import AllPayment from "../component/AllPayment/AllPayment";
import AllSeller from "../component/AllSeller/AllSeller";
import AllUser from "../component/AllUser/AllUser";
import Blog from "../component/Blog/Blog";
import CheckOutPage from "../component/CheckOutPage/CheckOutPage";
import ConfirmOrder from "../component/ConfirmOrder/ConfirmOrder";
import Contact from "../component/Contact/Contact";
import DashboadLayout from "../component/DashBoard/DashboardLayout.jsx/DashboadLayout";
import UserReviews from "../component/DashBoard/UserReviews/UserReviews";
import MyAddFood from "../component/MyAddFood/MyAddFood";
import MyOrders from "../component/MyOrders/MyOrders";
import MyProfile from "../component/MyProfile/MyProfile";
import SellerAddFoods from "../component/SellerAddFoods/SellerAddFoods";
import AllService from "../component/services/AllService/AllService";
import Services from "../component/services/services";
import SingleCatFood from "../component/ShopByCategory/CatFoods/SingleCatFood/SingleCatFood";
import ReviewUpdate from "../component/ShopByCategory/CatFoods/SingleCatFood/update/ReviewUpdate";
import Socket from "../component/socketIo/Socket.io";
import Sucess from "../component/stripe/Sucess";

import Main from "../Main/Main";
import Home from "../page/Home/Home";
import AdminRoute from "../private/AdminRoute/AdminRoute";
import PrivateRoute from "../private/PrivateRoute ";


import ErrorPage from "../shared/ErrorPage";
import Login from "../shared/Login/Login";
import SignUp from "../shared/SignUp/SignUp";



export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
              path:"/",
              element:<Home/>
            },
            {
                path:"/single-food/:id",
                element:<SingleCatFood/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:'/review/:id',
                element:<ReviewUpdate/>
            },
            {
                path:"chat",
                element:<Socket/>
            } ,
             
            {
                path:"/success",
                element:<Sucess/>
            },
            {
                path:"/services",
                element:<Services/>
            },
           
            {
                path:"/blog",
                element:<Blog/>
            },
           

        ]
        
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashboadLayout/></PrivateRoute>,
        children:[
            {
                path:"/dashboard",
                element:<MyProfile/>
            },
            {
                path:"/dashboard/my-add-cart",
                element:<MyAddFood/>
            },
            {
                path:"/dashboard/checkout",
                element:<CheckOutPage/>
            },
            {
                path:"/dashboard/my-payments",
                element:<MyOrders/>
            },
            {
                path:"/dashboard/review",
                element:<UserReviews/>
            },
            {
                path:"/dashboard/seller",
                element:<AdminRoute><AllSeller/></AdminRoute>
            },
            {
                path:"/dashboard/user",
                element:<AdminRoute><AllUser/></AdminRoute>
            },
            {
                path:"/dashboard/all-payment",
                element:<AdminRoute><AllPayment/></AdminRoute>
            },
            {
                path:"/dashboard/confirm-order",
                element:<AdminRoute><ConfirmOrder/></AdminRoute>
            },
            {
                path:"/dashboard/add-food",
                element:<AddFoods/>
            },
            {
                path:"/dashboard/seller-add-food",
                element:<SellerAddFoods/>
            },

        ]

    },
    {
        path:"/services",
        element:<Services/>,
        children:[

            {
                path:"/services",
                element:<AllService/>
            }
        ]

    },
    {
        path:"/contact",
        element:<Contact/>
    },
])