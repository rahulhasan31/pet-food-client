import axios from "axios";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList,  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [data, setData] = useState(null);
    console.log(data);
 

   useEffect(()=>{
    axios.get('https://pet-food-server.vercel.app/api/v1/catgory')
    .then((data)=>{
        setData(data)
    })
    .catch((e)=>{
        console.log(e);
    })
   },[])
    return (
      <>
      <div className="text-center mb-2">
            <h1 className="text-5xl font-semibold">New Arrivals</h1>
            </div> 
        <div className="flex justify-center w-full mb-5">
          
       <div className=" justify-center ">
       <Tabs>
    <TabList>
      
      {
        data?.data?.data?.map((category, index)=>(
          <Tab category={category} key={index}>{category.category}</Tab>
        ))
      }
      
    </TabList>

    
    
  </Tabs>

  
       </div>
        </div>
      </>
    );
};

export default Category;