import { useEffect, useState } from "react"


const useSeller=email=>{
    const [isSeller, setIsSeller]=useState(false)
    const [isSellerLoading, setisSellerLoading]=useState(true)

    useEffect(()=>{
    fetch(`https://pet-food-server.onrender.com/api/v1/seller/${email}`)
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        setIsSeller(data.isSeller)
        setisSellerLoading(false)
    })
    },[email])
    return [isSeller, isSellerLoading]
}

export default useSeller