import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProviders";
import useToken from "../../hooks/useToken";
import { usePostUsersMutation } from "../../redux/features/catFood/catFoodApiEndPoint";




const SignUp = () => {
  const [createdEmail, setCreatedEmail]=useState(null)
    const {createUser, updateUser}=useContext(AuthContext)
   
    const [postUsers,{isLoading}]=usePostUsersMutation()
   
    const Navigate=useNavigate()
console.log('createdEmail', createdEmail);
    const [token]=useToken(createdEmail)
 console.log("token", token);

    if (token) {
      Navigate('/')
    }


    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target
        const email= form.email.value 
        const name= form.name.value 
        const role= form.role.value 
        const password= form.password.value
        
        const option={
          name,
          email,
          role,
          password
        }
        console.log(option);
        if (isLoading) {
          return <p>loading</p>
        }else{
          postUsers(option)
        }
        
        
            
        createUser(email, password)
        .then((result)=>{
            const user= result.user
            console.log(user);
            const Useremail=user.email
            // setCreatedEmail(email)
            form.reset()
            console.log("email",Useremail);
            setCreatedEmail(Useremail)
            // getToken(email)
           
            Swal.fire({
                imageUrl: 'https://i.ibb.co/6w4FFdc/119257-blue-successful-login.gif',
                imageHeight: 150,
                title: 'Register Success',
                imageAlt: 'A tall image'
              })
             
             const profile={
              displayName:name
             } 
             updateUser(profile).then((res)=>{
              console.log('res', res);
             })
             
        })
        .catch(e=>{
            const msg= e.message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${msg}`,
                
              })
        })
    }

    // const getToken=email=>{
    //   fetch(`http://localhost:3000/jwt?email=${email}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //     if(data.accessToken){
    //       localStorage.setItem('accessToken', data.accessToken)
    //       Navigate('/')
    //     }
        
    //   })
    // }
  
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center align-middle items-center mt-20'>
         <div>
            <img className='p-24' src="https://i.ibb.co/X2wfhjs/animation-640-lhsyjaqj.gif" alt="" />
         </div>
      <div>
       
       
         
     <div className="text-center text-2xl font-semibold text-green-400">
        <h1 >Sign UP Now </h1>
     </div>

<form className="p-9" onSubmit={handleSubmit}>
  <div className="mb-6">
    <label to="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input  type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
  </div>
  <div className="mb-6">
    <label to="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required/>
  </div>
  <div className="mb-6">
  <select name="role" required className="select select-success w-full ">
  <option  >{" "}</option>
  <option>User</option>
  <option>Seller</option>

</select>
  </div>
  <div className="mb-6">
    <label to="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div>
   <h1>  Already Have an account? <Link to={'/login'} className="text-blue-500"> Please Login</Link></h1> 
  </div>
  <button type="submit" className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>





      </div>
        </div>
    );
};

export default SignUp;