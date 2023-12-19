
import './shop.css'

const ShopByImage = () => {
    return (
        <>
       
      <div className="" >
      <div data-aos="fade-down" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
   
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://i.ibb.co/bNkNDXp/3-54230f4d-6b57-4e88-ac3c-348bf238dcfd.webp"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center shop">
            <p className="text-lg font-bold">Cat Supplies</p>
            <p className="mb-5 text-xs text-gray-800">123 Product</p>
           
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yX-vumbN-tIP0FZiZdnQeoTVRapFgFHabQ&usqp=CAU"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center shop">
            <p className="text-lg font-bold">Cat Food</p>
            <p className="mb-5 text-xs text-gray-800">132 Products</p>
           
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://www.sydneyvetspecialists.com.au/wp-content/uploads/2018/11/the-abcs-of-great-cat-health.jpg"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center shop">
            <p className="text-lg font-bold">Cat Health</p>
            <p className="mb-5 text-xs text-gray-800">120 Products</p>
            
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyw-WqD6rL6v6q4V0LjUDFqC9YitkBE7SgIA&usqp=CAU"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center shop">
            <p className="text-lg font-bold">Jewelry</p>
            <p className="mb-5 text-xs text-gray-800">120 Products</p>
            
          </div>
        </div>
      </div>
    </div>

      </div>
        </>
    );
};

export default ShopByImage;