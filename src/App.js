import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
 import TestComponent from "./Components/TestComponent/TestComponent";
// import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title={"Our Programs"} subtitle={"What we offer"} />
        <Programs />
        <About />
        <Title title={"Gallery"} subtitle={"Campus Photos"} />
        <Campus />
        <Title title={"Testimonials"} subtitle={"What students say.."} />
        <Testimonials />
      </div>
      {<TestComponent /> }
    </div>
  );
}

export default App;
