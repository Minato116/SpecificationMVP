import React from 'react'
import contact_side from "../assets/images/contact_side.jpg";
import contact from "../assets/images/contact.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact position-relative">
        <img
          src="images/decoration-star.svg"
          alt=""
          className="decoration-star position-absolute"
        />

        <div className="container position-relative z-3">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
          <div className="row">
            <div className="col-lg-6 d-none d-md-block" data-aos="fade-right">
              <div className="image-container">
                <div className="img-effect">
                  <img
                    src={contact}
                    width="488"
                    height="450"
                    alt='contact'
                    className="main-img"
                  />
                  <img
                    src={contact_side}
                    width="150"
                    height="250"
                    alt='contact-side'
                    className="sub-img animated"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="text-container">
                <h2>Contact</h2>
                {/* <p>Du kan kontakta mig via kontaktformuläret. Jag svarar oftast samma dag. Ange kontaktinformation och beskriv ditt ärende. Så hörs vi snart!</p> */}
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  {/* <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone"
                    />
                  </div> */}
                  <div className="mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select"
                    >
                      <option >Choose</option>
                      <option defaultValue="1">FAQs</option>
                      <option value="2">...</option>  
                      <option value="3">Others</option>                    
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Enter message"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <input
                      type="submit"
                      value="Send"
                      className="btn btn-primary btn-block"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact