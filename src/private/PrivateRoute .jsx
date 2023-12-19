/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProviders";
import Loading from "../Loading/Loading";



const PrivateRoute  = ({children}) => {
    const location= useLocation()
    const {user, loading}= useContext(AuthContext)
   
       if(loading){
        return <Loading/>
       }
       if(user){
        return children
       }
     
       return<Navigate to='/login' state={{from:location}}></Navigate>
    
    
};

export default PrivateRoute ;