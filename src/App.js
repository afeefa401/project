import "./App.css";
import logo from './Assets/Logo.svg';

import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Components/Home";
 import About from "./Components/About";
 import Work from "./Components/Work";
 import Testimonial from "./Components/Testimonial";
 import Contact from "./Components/Contact";
 import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="App">
      <Home />
     
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />

    <BrowserRouter>  
    <Routes>
  <Route path="/Home"element={<Home />}></Route>
  <Route path="/Navbar"element={<Navbar />}></Route>
  <Route path= "/Testimonial" element={< Testimonial />}></Route>
  <Route path= "/Work" element={<Work />}></Route>
  <Route path= "/About" element={<About />}></Route><Route path= "/Work" element={<Work />}></Route>
  <Route path= "/Contact" element={<Contact />}></Route>
  
  </Routes>
  </BrowserRouter>  
  </div>
   </>
       
      
   
  );
}

export default App;