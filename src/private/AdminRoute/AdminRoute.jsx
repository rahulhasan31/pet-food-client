import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProviders";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Loading/Loading";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const location=useLocation()
    const {user, loading}= useContext(AuthContext)
    const[isAdmin, isAdminLoading]=useAdmin(user?.email)
   
    if(loading||isAdminLoading){
        return <Loading/>
       }
       if(user && isAdmin){
        return children
       }
     
       return<Navigate to='/login' state={{from:location}}></Navigate>
       
   
};

export default AdminRoute;