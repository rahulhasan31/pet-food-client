
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProviders";
import { useMyOrdersQuery } from "../../redux/features/catFood/catFoodApiEndPoint";
import OrderCard from "./OrderCard/OrderCard";


const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const email=user?.email
    
    const {data}=useMyOrdersQuery(email,{
        pollingInterval:30000,
        refetchOnMountOrArgChange:true
    })

    console.log('myPayments', data?.overallTotal);

    
   
    return (
        <div>
           {
            data?.map(food=> <>
            <OrderCard key={food._id} food={food}/>
            </>)
           }
        </div>
    );
};

export default MyOrders;