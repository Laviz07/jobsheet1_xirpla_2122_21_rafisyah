import React from 'react'
import Home from './component/home/Index'
import Tentang from './component/tentang/Tentang';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Portfolio from './component/portfolio/Portfolio';
import Form from './component/form/Form';
import './index.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {

  function revealr() {
    var reveals = document.querySelectorAll(".revealr");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealr);

  function reveall() {
    var reveals = document.querySelectorAll(".reveall");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveall);

  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/tentang"element={<Tentang/>}/>
        <Route path="/portfolio"element={<Portfolio/>}/>
        <Route path="/form"element={<Form/>}/>
      </Routes>
      <Footer/>
    </>
    </Router>
  )
}

export default App

