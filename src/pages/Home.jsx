import React from "react";
import "../css/Home.css";
import Hero from "../components/home_components/Hero";
import Service from "../components/home_components/Service";
function Home() {
  return (
    <>
      <div className="Home">
        <Hero />
        <Service />
      </div>
    </>
  );
}

export default Home;
