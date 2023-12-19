

const HeroSection = () => {
    return (
        <div  className="bg-gray-100">
             <div className="">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover "
            src="https://i.ibb.co/Tb37XNd/img-10-720x.webp"
            alt=""
          />
        </div>
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
          Do a Good Deed with Every Purchase
        
          </h5>
          <p className="mb-6 text-gray-900">
          Did you know that a bowl of food is donated for every order shipped? Together, we help shelters spend less on food, to put more into healthcare, rehab, and enrichment. Every bowl you help donate goes a long way towards helping pets in need.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
           <h1>
           <h1 className=" text-white"><button className="bg-green-400 py-3 px-9 rounded-full  text-lg" >Shop Now</button></h1>
           </h1>
          </div>
        </div>
      </div>
    </div>
            <div className="">
      <div className="grid gap-10 lg:grid-cols-2 ">
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
             
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
          We’re Crazy for Cats. We’re Pet Parents Like You.
            
            
          </h5>
          <p className="mb-6 text-gray-900">
          Did you know that a bowl of food is donated for every order shipped? Together, we help shelters spend less on food, to put more into healthcare, rehab, and enrichment. Every bowl you help donate goes a long way towards helping pets in need.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
          <h1 className=" text-white"><button className="bg-green-400 py-3 px-9 rounded-full  text-lg" >Shop Now</button></h1>
           
          </div>
        </div>
        <div>
          <img
            className="object-cover "
            src="https://i.ibb.co/fqBNbBs/img-12-720x.webp"
            alt=""
          />
        </div>
      </div>
    </div>

   
        </div>
    );
};

export default HeroSection;