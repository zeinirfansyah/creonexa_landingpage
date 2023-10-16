import React from "react";
import img_world from "../../assets/images/world.svg";
import blob_top_right from "../../assets/images/blob_top_right.svg";

function Hero() {
  return (
    <>
      <div className="Hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 desc">
              <h1 className="fw-normal">
                Connecting Creativity, Igniting Innovation.
              </h1>

              <p className="motto">
                Unite Creativity, Ignite Innovation. We're the nexus where
                inventive minds converge, connecting ideas to transform the
                digital landscape with brilliance.
              </p>
              <a href="#contact" className="btn btn1 mt-3">
                Lets Talk
              </a>
            </div>
            <div className="col-12 col-lg-6 image order-first order-lg-last">
              <img src={blob_top_right} alt="" className="blob_topright" />
              <img src={img_world} alt="..." className=" mx-auto foto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
