import { useContext } from "react";
import { AuthContext } from "../../context/AuthProviders";
import Loading from "../../Loading/Loading";
import { useGetAddToQuaryCartQuery } from "../../redux/features/catFood/catFoodApiEndPoint";
import MyAddCard from "./MyAddCard/MyAddCard";



const MyAddFood = () => {
    const {user}=useContext(AuthContext)
    const email=user?.email
    const {data, isLoading}=useGetAddToQuaryCartQuery(email)
    console.log(data);
    
    return (
        <div>
           <div  className=" ">
            {
                isLoading ? <><Loading/>
                </>:<>
                <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
                {data?.map(food=><MyAddCard food={food} key={food._id}/>)}
            
       
      </div>
                </>
}
        </div>
        </div>
    );
};

export default MyAddFood;