import { Card } from "antd";



const ShopCard = () => {
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"  className="grid grid-cols-1 lg:grid-cols-3 gap-9  ">
            
             <Card
             className="rounded-4xl h-full w-96 border-none  "
    
    
    cover={<img className=" p-6 rounded-xl" alt="example" src="https://i.ibb.co/8B54cNC/img-7-540x.webp" />}
  >
     <h1 className="text-xl w-full text-center font-medium">
    The Puuurfect Accessory-Does Exist!
    </h1>
    <h4 className="text-center ">Helping Feed Shelter Cats One Headband At A Time!</h4>
    <h1 className="text-center mt-5 px-4  text-white"><button className="bg-black py-4 px-5 rounded-2xl text-lg" >Shop Now</button></h1>
              </Card>
             <Card
             className="rounded-4xl  h-full w-96 border-none "

    
    cover={<img className=" p-6 rounded-xl" alt="example" src="https://i.ibb.co/hC4JMvB/img-8-540x.webp" />}
  >
     <h1 className="text-xl w-full text-center font-medium">
     Garden Season Is Upon Us!
    </h1>
    <h4 className="text-center ">Puuuuurfect garden decor for the ultimate cat lover</h4>
    <h1 className="text-center mt-5 px-4  text-white"><button className="bg-black py-4 px-5 rounded-2xl text-lg" >Shop Now</button></h1>
              </Card>
       <Card
             className="rounded-4xl h-full w-96 border-none "
    
    
    cover={<img className=" p-6 rounded-xl" alt="example" src="https://i.ibb.co/XV3WnZG/img-9-540x.jpg" />}
  >
     <h1 className="text-xl w-full text-center font-medium ">
     Jewelry To Show Off Your Love For Your Cat!
    </h1>
    <h4 className="text-center ">Rings, Earrings, Bracelets, Oh My!!</h4>
     <h1 className="text-center mt-4 px-4  text-white"><button className="bg-black py-4 px-5 rounded-2xl text-lg" >Shop Now</button></h1>
              </Card>
           
        </div>
    );
};

export default ShopCard;