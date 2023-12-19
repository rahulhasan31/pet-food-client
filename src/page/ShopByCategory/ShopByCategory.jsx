
import { GiCat } from "react-icons/gi";
import ShopByImage from "./shop/ShopByImage";

const ShopByCategory = () => {
    return (
        <div style={{
           
            
        }}>
             <div style={{
            // width:"1200px",
            // margin:"auto"
           }}>
           <div className="flex justify-center mt-3  ">
             <h1 className="text-5xl text-orange-400 font-medium">
             <GiCat/>
             </h1>
             
            </div>
            <h1 className="text-center lg:text-5xl font-semibold">
             Shop by Category
             </h1>
           </div>
           
             <ShopByImage/>
        </div>
    );
};

export default ShopByCategory;