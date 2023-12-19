
import { Carousel } from 'antd';
import './Btanner.css'
// const contentStyle = {
//     height: '100vh',
//     color: '#fff',
//     marginTop:"68px",
//     // lineHeight: '160px',
    
    
//   };

 
const Branner = () => {
    return (
        <>
            <Carousel autoplay className='mt-16'>
    <div>
      <div >

        <div className='flex'>
        <img src="https://i.ibb.co/hZdqNgb/Main-Slide-1-1920x.webp" alt="" />
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className='relative text-black lg:w-auto  lg:top-52 lg:left-56 '>
            <span className='text-2xl text-center'>Mutilpurpose</span>
            <br />
            <h1 className=' lg:text-5xl lg:w-96  sm:text-xl sm:w-48'>The Best Cat Food, according to exparts and veterinarians
              </h1>
        </div>
        </div>
        <img   className=' w-screen relative  -top-6 ' src="https://i.ibb.co/Hn99Gv9/pattern-body-b34d1edb-60c6-451d-8a0b-510652a4350d-1920x200.webp" alt="" />
        
      
  
      </div>
    </div>
    <div>
      <div >
        <div className='cat-three text-black'>
        <img src="https://i.ibb.co/jLcg82P/Main-Slide-2-1920x.webp" alt="" />
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className=' cat-three-one'>
            <span className='text-2xl text-center'>Mutilpurpose</span>
            <br />
            <h1 className=' lg:text-5xl lg:w-96  sm:text-xl sm:w-48'>Being a cat Mom is my happily ever after</h1>
        </div>
        </div>

     <div className='sm:hidden'>
     <img className='  lg:w-screen relative -top-6  ' src="https://i.ibb.co/Hn99Gv9/pattern-body-b34d1edb-60c6-451d-8a0b-510652a4350d-1920x200.webp" alt="" />
     </div>
      </div>
    </div>





    <div>
      <div >
    
      
      <div className='cat-three text-black'>
      
      <img src="https://i.ibb.co/XpS3mqT/Main-Slide-3-1920x.webp" alt="" />
      <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='cat-three-one'>
            <span className='text-2xl text-center'>Mutilpurpose</span>
            <br />
            <h1 className=' lg:text-5xl lg:w-96  sm:text-xl sm:w-48'> What Is The Healthiest Cat  Food ?</h1>
        </div>
      </div>
      
 




      <img   className=' w-screen relative  -top-6 ' src="https://i.ibb.co/Hn99Gv9/pattern-body-b34d1edb-60c6-451d-8a0b-510652a4350d-1920x200.webp" alt="" />
      
      </div>
      
    </div>
   
  </Carousel>  
  
  



        </>
    );
};

export default Branner;


// relative text-black lg:w-auto lg:-left-52 lg:top-52