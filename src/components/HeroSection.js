import React from "react";

function HeroSection() {
  return (
    <section className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Build fast, responsive sites with
              <span className="text-primary"> Bootstrap</span>
            </h1>
            <p className="lead my-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit
            </p>
            <button
              className="btn btn-primary btn
            -lg"
            >
              Start The Enrollment
            </button>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            src="/hero.svg"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
