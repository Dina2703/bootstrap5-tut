import React from "react";

function HeroSection() {
  return (
    <section className="bg-dark text-light p-5  p-lg-0 pt-lg-5 text-center text-sm-start">
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
              data-bs-toggle="modal"
              data-bs-target="#enroll"
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

      <div class="modal fade" id="enroll" tabindex="-1">
        <div class="modal-dialog text-dark">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className="lead">
                Fill out this form and we will get back to you
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="col-form-label">
                    First Name:
                  </label>
                  <input type="text" id="firstName" className="form-control" />
                </div>
              </form>
              <div className="mb-3">
                <label htmlFor="lastName" className="col-form-label">
                  Last Name:
                </label>
                <input type="text" id="lastName" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">
                  Email:
                </label>
                <input type="text" id="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="col-form-label">
                  Phone:
                </label>
                <input type="text" id="phone" className="form-control" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
