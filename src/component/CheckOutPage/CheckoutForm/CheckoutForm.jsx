import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProviders";
import { usePostPaymentMutation } from "../../../redux/features/catFood/catFoodApiEndPoint";


// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ foodData, overallTotal }) => {
  const {user}=useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [process, setProcess]=useState(false)
  const [clientSecret, setClientSecret] = useState("");
  const email=user?.email
 
  const [postPayment, {isSuccess}]=usePostPaymentMutation()




  useEffect(() => {
    
    if(overallTotal){
      fetch("https://pet-food-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({overallTotal: overallTotal}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((error) => {
          console.error("Error fetching clientSecret:", error);
        });
    }
   
  }, [overallTotal ]);


//   useEffect(()=>{
//    const d= foodData?.map(food=>({
//     ...food
    
//    }))
//    console.log('map data D',d);
//   },[foodData])

// console.log("mapData", mapData);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      console.error("Stripe.js has not loaded yet or clientSecret is missing");
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      console.error("Card Element not found");
      return;
    }

    try {
      // Create a PaymentMethod
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: card,
      });

      if (error) {
        setCardError(error.message);
        return;
      }

      setProcess(true)

      // Confirm the payment using the PaymentIntent
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethod.id,
        }
      );

      if (confirmError) {
        setCardError(confirmError.message);
      } else {

        // Check payment status here
        if (paymentIntent.status === "succeeded") {

          const payment={
            foods: foodData, 
            overallTotal: overallTotal , 
            email:email, 
            transactionId:paymentIntent.id
          }
          postPayment(payment)
           console.log("isSuccess",isSuccess);
           Swal.fire({
            title: "Your Payment Succeeded",
            text: "You clicked the button!",
            icon: "success",
          });
        setTransactionId(paymentIntent.id);

         

         
        }
        setProcess(false)
      }
    } catch (err) {
      setCardError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 bg-gray-100 py-3 text-black">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#000000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        
       {/* {
        foodData?.length ? <> </>:<><Link to={'/'}><p className="px-5 py-3 bg-orange-400 rounded-md  mt-4 text-center text-white">Add Foods</p></Link></>
       } */}
       {
          transactionId?<><button disabled={transactionId}   className="  mt-9 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Paid</button></>:
            <button disabled={!stripe || !clientSecret || process} type="submit" className="  mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
          
          
        }
        
      </form>
      {cardError && <div style={{ color: "red" }}>{cardError}</div>}
      {
       transactionId? <><h1 className="text-md font-medium mt-4 text-green-500 ">TransactionId: {transactionId}</h1></>:""
      }
    </>
  );
};

export default CheckoutForm;
