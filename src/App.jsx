
import { useEffect } from 'react';
import {  AnimatePresence } from "framer-motion"
import { RouterProvider } from 'react-router-dom'
import './App.css'
import  { Toaster } from 'react-hot-toast';
import { router } from './routes/routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  
  
  useEffect(() => {
    
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();

  
  }, []); 
  AOS.init();

  return (
    <div className=''>
      <Toaster/>
      <AnimatePresence>
        
      <RouterProvider router={router}>

</RouterProvider>
      </AnimatePresence>
     
     
    </div>
  )
}

export default App
