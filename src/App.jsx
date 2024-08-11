import React, { useEffect } from 'react';
import Menu from './src/Menu'; // This should be correct if Menu.js is in the same directory as App.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Banner from './Components/Banner/Banner';
import AppStore from './Components/AppStore/AppStore';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react";


const App = () => {
  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay: 100,
    });
  });
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Home />
        <Services />
        <Banner /> 
        <AppStore /> 
        <Testimonial />
        <Footer />
        <Analytics />
    </div>
  )
}

export default App;
