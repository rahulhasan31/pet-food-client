import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDeleteUsersMutation, useGetAllUserQuery } from "../../redux/features/catFood/catFoodApiEndPoint";


const AllUser = () => {
    const {data,isLoading}=useGetAllUserQuery()
    const[deleteUsers, {isSuccess}]=useDeleteUsersMutation()
    const handeleDelete=(id)=>{
      deleteUsers(id)
    }
   useEffect(()=>{
    if (isSuccess) {
      toast.success('Successfully User Delete')
    }
   },[isSuccess])
    return (
        <div>
                  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="" >
      <tr>
     
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
        <th>Role</th>
        <th>User Details</th>
      </tr>
    </thead>
    {
        isLoading ? <> <span className="loading loading-spinner text-primary"></span></>:<>
        <tbody>
      {/* row 1 */}
      {
        data?.map((user)=> <>
        <tr key={user._id}>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.imageURL} />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.shopAddress}</div>
            </div>
          </div>
        </td>
        <td>
          {user.email}
          <br/>
       
        </td>
        <td>
          <button onClick={()=>handeleDelete(user._id)} className=" btn   hover:bg-lime-900 px-5 py-2 bg-red-600 text-gray-200 ">Delete</button>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">{user.role}</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        
        </>)
      }
     
    </tbody>
        </>
    }
   
    
  </table>
</div>
        </div>
    );
};

export default AllUser;