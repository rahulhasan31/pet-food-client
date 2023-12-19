
import Marquee from "react-fast-marquee";

const Sponser = () => {
    return (
        <div className="max-sm:hidden">
        <>
      <h1 className="text-center font-semibold text-2xl shadow-lg rounded-full w-60 px-10  border border-cyan-400 mx-auto mt-8 text-cyan-500 ">
        <span className="text-green-500">Our</span> Sponser{" "}
      </h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Marquee>
          <div className="grid gap-48 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            <div>
              <img
                className="object-cover  shadow"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96">Stipe</p>
               
              </div>
            </div>
            <div>
              <img
                className="object-cover   shadow"
                src="https://banner2.cleanpng.com/20180705/auy/kisspng-visa-debit-card-credit-card-logo-mastercard-supermercado-5b3daa406f9d67.4063706315307679364572.jpg"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96 ">Visa</p>
                
              </div>
            </div>
            <div>
              <img
                className="object-cover shadow"
                src="https://raw.githubusercontent.com/llanojs/Readme_template/master/react-logo.jpg"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96">React</p>
          
              </div>
            </div>
            <div>
              <img
                className="object-cover shadow"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96">Node Js</p>
          
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </>
        </div>
    );
};

export default Sponser;