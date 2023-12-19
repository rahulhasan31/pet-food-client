import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProviders";
import Loading from "../../Loading/Loading";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";



const Services = () => {
  const {loading}=useContext(AuthContext)
  

  useEffect(() => {
    
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();

  
  }, []); 
    return (
      <>
      {
      loading?<><Loading/></>:  < div >
    <Navbar/>
    <Outlet/>
    <Footer></Footer>
    
        </div>
}
      </>

    );
};

export default Services;