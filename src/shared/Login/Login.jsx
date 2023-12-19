import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProviders";
import useToken from "../../hooks/useToken";


const Login = () => {
      const{loginUser}=useContext(AuthContext)
      const Navigate=useNavigate()
      const [createdEmail, setCreatedEmail]=useState('')
      console.log(createdEmail,"createdEmail");
      const [token]=useToken(createdEmail)
      console.log("token", token);
     
         if (token) {
           Navigate('/dashboard')
         }
  
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                console.log(user);
                setCreatedEmail(email)
                Swal.fire({
                    imageUrl: 'https://i.ibb.co/6w4FFdc/119257-blue-successful-login.gif',
                    imageHeight: 150,
                    title: 'Login Success',
                    imageAlt: 'A tall image'
                })
               
            })
            .catch(e => {
                const msg = e.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${msg}`,

                })
            })
        }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center align-middle items-center mt-20'>
         <div>
            <img className='p-24' src="https://i.ibb.co/cJzFnnQ/animation-640-lhsot7e4.gif" alt="" />
         </div>
      <div>
       
       
         
     <div className="text-center text-2xl font-semibold text-green-400">
        <h1 >Sign IN Now </h1>
     </div>

<form className="p-9" onSubmit={handleLogin}>
  <div className="mb-6">
    <label to="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required/>
  </div>
  <div className="mb-6">
    <label to="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div>
   <h1>  Dont Have an account? <Link to={'/signup'} className="text-blue-500"> Please SIgnUp</Link></h1> 
  </div>
  <button type="submit" className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>





      </div>
        </div>
        </div>
    );
};

export default Login;