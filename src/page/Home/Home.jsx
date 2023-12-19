import { useEffect } from "react";
import Extra from "../../component/Extra/Extra";


import Category from "../../component/ShopByCategory/Category";
import CatFoods from "../../component/ShopByCategory/CatFoods/CatFoods";
import Sponser from "../../component/Sponser/Sponser";



import Branner from "../Branner/Branner";
import CoverSection from "../CoverSection/CoverSection";




import HeroSection from "../HeroSection/HeroSection";

import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ShopCard from "../ShopCard/ShopCard";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    useEffect(() => {
    
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    
        scrollToTop();
    
      
      }, []); 
    
    return (
        <div className="mt-20 max-w-screen-2xl mx-auto">
         <Branner/>
         <ShopByCategory/>
         <ShopCard/>
         <Category/>
         <CatFoods/>
         <CoverSection/> 
         <Extra/>
         <HeroSection/>
         <Testimonial/>
         <Sponser/>
        </div>
    );
};

export default Home;