import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProviders";
import { useGetAddToQuaryCartQuery } from "../../redux/features/catFood/catFoodApiEndPoint";
import { useForm } from "react-hook-form"
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";


const stripePromise = loadStripe('pk_test_51M6YTaIOaRhLiCR9IUacPMWr7kIOpNT2oEv4gm3lLOoRyLZ0sQplaW3fiYroKVA63hTjrAq5homSPjhn01lr0z36007McI12l5');
console.log(stripePromise);
const CheckOutPage = () => {
  const {user}=useContext(AuthContext)
   const email=user?.email
   const[foodData, setFoodData]=useState(null)

  //  const[paymentsData, setPaymentsData]=useState(null)
  
  //  const[pData, setPData]=useState(null)
  //  const[payData, setpay]=useState(null)
  //  const[sessionData, setsessionData]=useState(null)
  const {data,  isSuccess, isLoading}=useGetAddToQuaryCartQuery(email,{
    pollingInterval:30000,
    refetchOnMountOrArgChange: true,
    
  })
  const {
    register,
    handleSubmit,
    
  } = useForm()
 
  const onSubmit = (data) => console.log(data)
  useEffect(() => {
    if (isSuccess) {
      const paidItems = data.filter(item => !item.paid);

      const totalData = paidItems.map(item => ({
        ...item,
        total: item.price * item.quantity
      }));

      // Set the entire array in state
      setFoodData(totalData);
    }
  }, [data, isSuccess]);
  
  // Now you can access the total price for each item in the foodData array
  console.log("foodData",foodData);
  
  // If you want to calculate the overall total, you can use reduce
  const overallTotal = foodData?.reduce((acc, item) => acc + item.total, 0);


  
  // const makePayment = async () => {
  //   const stripe = await loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
  
   
  
  //   const body = {
  //     foods: foodData, // Assuming your server expects 'foods' instead of 'food'
  //   };
  
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  
  //   try {
  //     const res = await fetch("http://localhost:3000/api/create-checkout-session", {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     });
  
  //     if (!res.ok) {
  //       throw new Error('Failed to create checkout session');
  //     }
  
  //     const session = await res.json();
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });
  //     setsessionData(session)
  //     console.log("session", session);
  //     console.log("result", result);
  //     if (result.error) {
       
  //       console.error(result.error);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle error, e.g., show an error message to the user
  //   }
  // };

  // useEffect(()=>{
  //   axios.get('http://localhost:3000/payment')
  //   .then((data)=>{
  //       setPaymentsData(data)
  //   })
  //   .catch((e)=>{
  //       console.log(e);
  //   })
  //  },[])
   
  //  useEffect(()=>{
  //   paymentsData?.data?.map((pay)=>{
      
  //     setpay(pay.foods)
  //     console.log("pa",pay.foods);
      
  //   })
  //  },[paymentsData])
   


  //  useEffect(()=>{
  //   foodData?.map(f=>{
  //     setFData(f)
  //   })
  //  },[foodData])
  //  useEffect(()=>{
  //   payData?.map(p=>{
  //     setPData(p)
  //   })
  //  },[payData])

  // if(foodData?.length<1){
  //   setFoodData(null)
  // }

  

 
    return (
        <div>
  {
    isLoading ? <><p className="text-4xl">Loding</p></>:  <div className="relative mx-auto w-full bg-white">
    <div className="grid min-h-screen grid-cols-10">
      <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
        <div className="mx-auto w-full max-w-lg">
          <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
          
          <form onSubmit={handleSubmit(onSubmit)}  className="mt-10 flex flex-col space-y-4">
            <div><label  className="text-xs font-semibold text-gray-500">Name</label>
            <input required {...register('name')} type="text" id="name" name="name"  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
            <div><label  className="text-xs font-semibold text-gray-500">Email</label>
            <input required {...register('email')} type="email" id="email" name="email" placeholder="john.capler@fang.com" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
            <div><label  className="text-xs font-semibold text-gray-500">Adress</label>
            <input required {...register('address')} type="text" id="address" name="address" placeholder="your Address" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
            <div><label  className="text-xs font-semibold text-gray-500">Number</label>
            <input required {...register('number')} type="number" id="number" name="number" placeholder="017000000" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
            
  
          </form>
          <Elements stripe={stripePromise}  >
        <CheckoutForm foodData={foodData}  overallTotal={overallTotal}/>
      </Elements>
          
        </div>
      </div>
      <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
        <h2 className="sr-only text-black">Order summary</h2>
        <div>
          <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
        </div>
        <div className="relative">
          <ul className="space-y-5">
            {
              foodData?.map(food=><>
              <li key={food._id} className="flex justify-between">
              <div className="inline-flex">
                <img src={food?.imageURL} alt="" className="max-h-16" />
                <div className="ml-3">
                  <p className="text-base font-semibold text-white">{food?.name}</p>
                  <p className="text-sm font-medium text-white text-opacity-80">quantity : {food?.quantity}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-white">${food?.price}</p>
            </li>
              </>)
            }
           
          </ul>
          <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
          <div className="space-y-2">
            <p className="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>${overallTotal}</span></p>
            {/* <p className="flex justify-between text-sm font-medium text-white"><span>Vat: 10%</span><span>$55.00</span></p> */}
          </div>
        </div>
        <div className="relative mt-10 text-white">
          <h3 className="mb-5 text-lg font-bold">Support</h3>
          <p className="text-sm font-semibold">+01 653 235 211 <span className="font-light">(International)</span></p>
          <p className="mt-1 text-sm font-semibold">support@nanohair.com <span className="font-light">(Email)</span></p>
          <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
        </div>
        <div className="relative mt-10 flex">
          <p className="flex flex-col"><span className="text-sm font-bold text-white">Money Back Guarantee</span><span className="text-xs font-medium text-white">within 30 days of purchase</span></p>
        </div>
      </div>
    </div>
  </div>
  }


        </div>
    );
};

export default CheckOutPage;