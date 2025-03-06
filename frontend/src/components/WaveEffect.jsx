import React from "react";
import Wave from "react-wavify";

const WaveEffect = ({title, content}) => {
  return (
    <section className="hero-section inner-page">
      <Wave
        className="absolute bottom-0 h-4/5 rotate opacity-75"
        fill="rgba(2, 5, 161, 0.91)"
        style={{
          content: "",
          position: "absolute",
          bottom: "0",
          top: "0",
          left: "0",
          right: "0",
        }}
        paused={false}
        options={{
          amplitude: 20,
          speed: 0.3,
          points: 6,
        }}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center hero-text">
                <h1
                  data-aos="fade-in"
                  data-aos-delay="200"
                  className="animated"
                >
                  {title}
                </h1>
                <p className="mb-2 fs-4 text-pink" data-aos="fade-up" data-aos-delay="200">
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaveEffect;
