import React, { useState, useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";


// Data for counts
const countsData = [
  { icon: "fa-solid fa-face-smile", end: 14, label: "Aptitude", delay: 50 },
  { icon: "fa-solid fa-brain", end: 5, label: "Cognitive", delay: 100 },
  { icon: "bx bx-atom", end: 35, label: "Emotional Intelligence", delay: 150 },
  { icon: "fa-solid fa-handshake", end: 25, label: "Integrity", delay: 200 },
  { icon: "fa fa-globe", end: 5, label: "Pre-Employment", delay: 250 },
  { icon: "fa-solid fa-book", end: 16, label: "Skill and Knowledge", delay: 300 },
];

const CountBox = ({ icon, end, label, delay }) => {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <div className="col-lg-4 col-md-4 mb-5" data-aos="fade-up" data-aos-delay={delay}>
      <div className="count-box text-center py-3 px-4 shadow-sm rounded">
        <i className={`${icon} display-4 text-white fs-2`}></i>
        <span
          data-purecounter-start="0"
          data-purecounter-end={end}
          data-purecounter-duration="1"
          className="purecounter d-block display-4 mt-5"
        ></span>
        <p className="mt-2 fs-4 fs-bold">{label}</p>
      </div>
    </div>
  );
};

const CountsSection = () => {
  return (
    <section id="counts" className="counts py-5">
      <div className="container">
        <div className="row">
          {countsData.map((count, index) => (
            <CountBox 
              key={index} 
              icon={count.icon} 
              end={count.end} 
              label={count.label} 
              delay={count.delay} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
