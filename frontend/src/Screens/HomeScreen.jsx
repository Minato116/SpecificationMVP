import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteProjectMutation, useGetAllProjectsQuery } from '../store/slices/projectSlice';
import Loader from '../components/Loader'
import Message from '../components/Message'
import { toast } from "react-toastify";

// import slide1 from "../assets/images/header-slide-1.jpg";
// import slide2 from "../assets/images/header-slide-2.jpg";
// import slide3 from "../assets/images/header-slide-3.jpg";
import hero_bg from '../assets/images/icon1.png';
import about from '../assets/images/about.png';
import hero_bg1 from '../assets/images/hero-bg.png';
import TypeEffect from '../components/TypeEffect';
import WalkingIcon from '../components/WalkingIcon';
import FeaturesSection from '../components/FeaturesSection';
import CountsSection from '../components/CountsSection';

const HomeScreen = () => {

  const navigate = useNavigate();
  const { data, isLoading, refetch, error } = useGetAllProjectsQuery();
  const [deleteProject, { isLoading: loadingDelete }] = useDeleteProjectMutation();
  const deleteHandle = async (id) => {
    try {
      const response = await deleteProject(id);
      toast.success(response.data.message);
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }
  return (
    <>

      <section id="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>
                  Welcome to our <span><TypeEffect string={'CVFied'} /></span>
                </h1>
                <h2>You can test Cognitive, Skill, Aptitude, IQ, Emotional Inteligence and Knowledge.</h2>
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto text-decoration-none"><i className="fa fa-hourglass-start fa-flip"></i> Get Started</a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img src={hero_bg} className="img-fluid fa-beat" alt="HERO" />
            </div>
          </div>
        </div>
        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>

      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4" data-aos="fade-right">
              <img src={about} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-8 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
              data-aos="fade-left"
            >
              <h3>About CVFied</h3>
              {/* <p>
              Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
            </p> */}
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon"><i className="fa-solid fa-brain" /></div>
                    <h4 className="title"><a href="">Cognitive Test</a></h4>
                    <p className="description">
                      Cognitive relates to mental processes like thinking, learning, memory, perception, problem-solving, reasoning, decision-making, attention, and understanding.
                    </p>
                  </div>

                  <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon"><i className="fa-solid fa-handshake" /></div>
                    <h4 className="title"><a href="">Integrity Test</a></h4>
                    <p className="description">
                      Integrity is the quality of being honest, ethical, and having strong moral principles, consistently demonstrating fairness and trustworthiness.
                    </p>
                  </div>

                  <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon"><i className="bx bx-atom" /></div>
                    <h4 className="title"><a href="">Emotional Inelligence</a></h4>
                    <p className="description">
                      Emotional intelligence is the ability to recognize, understand, manage emotions, empathize with others, and build healthy relationships effectively.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon"><i className="fa fa-globe" /></div>
                    <h4 className="title"><a href="">Pre-Employment</a></h4>
                    <p className="description">
                      Pre-employment refers to the process of assessing, screening, and evaluating potential candidates before hiring, ensuring suitability for job requirements.
                    </p>
                  </div>

                  <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon"><i className="fa-solid fa-face-smile"></i></div>
                    <h4 className="title"><a href="">Aptitude Test</a></h4>
                    <p className="description">
                      Aptitude refers to a person's natural ability or talent to learn, develop skills, and perform tasks efficiently in various areas.
                    </p>
                  </div>

                  <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon"><i className="fa-solid fa-book" /></div>
                    <h4 className="title"><a href="">Skills and Knowledge</a></h4>
                    <p className="description">
                      Skills are practical abilities acquired through practice, while knowledge is theoretical understanding gained through study, experience, or education in specific areas.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >

      <WalkingIcon />
      <CountsSection />
      <FeaturesSection />
      <WalkingIcon />

    </>
  );
};

export default HomeScreen;
