import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Sucess = () => {
    const [paymentsData, setPaymentsData]=useState(null)
    const[payData, setpay]=useState(null)
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        axios.get('https://pet-food-server.vercel.app/payment')
        .then((data)=>{
            setPaymentsData(data)
        })
        .catch((e)=>{
            console.log(e);
        })
       },[])

       console.log(paymentsData?.data);
       useEffect(()=>{
        paymentsData?.data?.map((pay)=>{
          setpay(pay)
          console.log("pay data",pay);
        })
       },[paymentsData])
       console.log("pay",payData);
    return (
        <div className="h-screen  lg:mt-40">
            {/* <div className="justify-center flex">
                <img className="w-96 text-center " src="https://assets-v2.lottiefiles.com/a/89a6098c-1189-11ee-8baf-a75d717c82f3/piB10PIenn.gif" alt=""  />
            </div> */}

            <div className="justify-center flex">
                <img className="w-96" src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif" alt="" />
            </div>
            <div className=" text-center">
              <h1 className="text-green-500 font-bold text-xl">Your Payment Succesfull</h1>
              <h1 className="text-red-500 font-bold text-xl">
              Payment transaction id: <small> {payData?.session_id} </small> </h1>
              <Link to={'/dashboard/checkout'}> <button className="px-5 py-3 bg-green-400  text-white font-medium rounded-md">Go Checkout Page</button>  </Link>
            </div>
        </div>
    );
};

export default Sucess;