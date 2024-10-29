import React from "react";
import Hero from "../atoms/Hero";
import Testimonial from "../molecules/Testimonial";
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-900">
      <Hero />
      <Testimonial />
    </div>
  );
};

export default Home;
