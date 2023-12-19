import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProviders";

import useSeller from "../../hooks/useSeller";
import Loading from "../../Loading/Loading";

// eslint-disable-next-line react/prop-types
const SellerRoute = ({children}) => {
    const location=useLocation()
    const {user, loading}= useContext(AuthContext)
    const[isSeller, isSellerLoading]=useSeller(user?.email)
   
    if(loading||isSellerLoading){
        return <Loading/>
       }
       if(user && isSeller){
        return children
       }
     
       return<Navigate to='/login' state={{from:location}}></Navigate>
       
   
};

export default SellerRoute;