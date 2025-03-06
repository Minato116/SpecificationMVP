import React from "react";
import svg from "../assets/decoration-star.svg";
import { Link } from "react-router-dom";

const featuresData = [
  { icon: "fas fa-brain", color: "#ffbb2c", title: "Abstract Reasoning", delay: 50 },
  { icon: "fas fa-puzzle-piece", color: "#5578ff", title: "Logical Reasoning", delay: 100 },
  { icon: "fas fa-cogs", color: "#e80368", title: "Mechanical Aptitude", delay: 150 },
  { icon: "fas fa-gavel", color: "#e361ff", title: "Situational Judgement", delay: 200 },
  { icon: "fas fa-arrows-alt", color: "#47aeff", title: "Spatial Reasoning", delay: 250 },
  { icon: "fas fa-eye", color: "#ffa76e", title: "Attention to Detail", delay: 300 },
  { icon: "fas fa-user", color: "#11dbcf", title: "Self Awareness", delay: 350 },
  { icon: "fas fa-heart", color: "#4233ff", title: "Motivation", delay: 400 },
  { icon: "fas fa-i-cursor", color: "#b2904f", title: "IQ", delay: 450 },
  { icon: "fas fa-volume-mute", color: "#b20969", title: "Emotional Control", delay: 500 },
  { icon: "fas fa-users", color: "#ff5828", title: "Social Skills", delay: 550 },
  { icon: "fas fa-balance-scale", color: "#29cc61", title: "Self Regulation", delay: 600 },
  { icon: "fas fa-hand-holding-heart", color: "#ffbb2c", title: "Empathy", delay: 650 },
  { icon: "fas fa-handshake", color: "#5578ff", title: "Relationship Management", delay: 700 },
  { icon: "fas fa-chart-line", color: "#e80368", title: "Emotional Quotient", delay: 750 },
  { icon: "fas fa-scale-balanced", color: "#e361ff", title: "Moral Judgement", delay: 800 },
  { icon: "fas fa-file-alt", color: "#47aeff", title: "Overt Integrity", delay: 850 },
  { icon: "fas fa-comments", color: "#ffa76e", title: "Rules Compliance", delay: 900 },
  { icon: "fas fa-grin", color: "#11dbcf", title: "Honesty and Truthfulness", delay: 950 },
  { icon: "fas fa-calendar-check", color: "#4233ff", title: "Reliability", delay: 1000 },
  { icon: "fas fa-globe", color: "#b2904f", title: "Cultural Fit", delay: 1050 },
  { icon: "fas fa-smile", color: "#b20969", title: "Behavior", delay: 1100 },
];

const FeaturesSection = () => {
  // Group the features into rows of 4
  const featuresInRows = [];
  for (let i = 0; i < featuresData.length; i += 4) {
    featuresInRows.push(featuresData.slice(i, i + 4));
  }

  return (
    <section id="features" className="features">
      <div className="container position-relative">
        <div className="section-title" data-aos="fade-up">
          <h2 className="fw-bold">Lists</h2>
          <p >Check The Test Lists</p>
        </div>
        <img
          src={svg}
          alt=""
          className="decoration-star position-absolute fa-spin"
        />
        <img
          src={svg}
          alt=""
          className="decoration-star-2 position-absolute fa-spin"
        />
        
        {featuresInRows.map((row, rowIndex) => (
          <div className="row" key={`row-${rowIndex}`} data-aos="fade-left">
            {row.map((feature, colIndex) => (
              <div 
                key={`feature-${rowIndex}-${colIndex}`}
                className="col-lg-3 col-md-6 mb-4"
                data-aos="zoom-in"
                data-aos-delay={feature.delay}
              >
                <div className="icon-box text-center p-3 border rounded shadow-sm h-100 d-flex flex-column justify-content-center">
                  <i className={`${feature.icon} fs-1 mb-3`} style={{ color: feature.color }}></i>
                  <h3 className="fs-5 fw-semibold">
                    <a href="#" className="text-decoration-none text-dark hover-underline">{feature.title}</a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ))}       
        
      </div>
      <div className="d-flex justify-content-center" >
          <Link to="/quiz" className="btn btn-primary fw-bolder py-4 px-6 fs-1" data-aos="fade-right" data-aos-delay="400">Let's Start</Link>
        </div>

    </section>
  );
};

export default FeaturesSection;
