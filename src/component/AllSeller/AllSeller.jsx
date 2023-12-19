import { toast } from "react-hot-toast";
import { useDeleteUsersMutation, useGetSellerQuery } from "../../redux/features/catFood/catFoodApiEndPoint";


const AllSeller = () => {
    const {data, isLoading}=useGetSellerQuery()
    const[deleteUsers, {isSuccess}]=useDeleteUsersMutation()
    const handeleDelete=(id)=>{
      deleteUsers(id)
    }
    if (isSuccess) {
      toast.success('Successfully Seller Delete')
    }
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
        <th>Role</th>
        <th>Seller details</th>
      </tr>
    </thead>
    {
        isLoading ? <> <span className="loading loading-spinner text-primary"></span></>:<>
        <tbody>
      {/* row 1 */}
      {
        data?.map((seller)=> <>
        <tr key={seller._id}>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={seller.imageURL} />
              </div>
            </div>
            <div>
              <div className="font-bold">{seller.name}</div>
              <div className="text-sm opacity-50">{seller.shopAddress}</div>
            </div>
          </div>
        </td>
        <td>
          {seller.email}
          <br/>
       
        </td>
        <td>
          <button onClick={()=>handeleDelete(seller._id)} className=" btn   hover:bg-lime-900 px-5 py-2 bg-red-600 text-gray-200 ">Delete</button>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">{seller.role}</button>
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
    {/* foot */}
    
    
  </table>
</div>  
        </div>
    );
};

export default AllSeller;