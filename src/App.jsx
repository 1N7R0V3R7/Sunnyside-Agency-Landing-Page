import React from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
