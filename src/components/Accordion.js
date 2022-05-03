import React from "react";

function Accordion() {
  return (
    <section className="p-5" id="questions">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked questions</h2>
        <div className="accordion accordion-flush" id="questions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Can Bootstrap 5 be used for production?
              </button>
            </h2>
            <div
              id="question-one"
              className="accordion-collapse collapse"
              data-bs-parent="#questions
              "
            >
              <div className="accordion-body">
                Bootstrap 5 is finally out - this time for real. STABLE - means
                that a technology is ready to use in production environments.
                Unlike an alpha or beta version. Bootstrap 5 is now stable
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                Can we use Bootstrap 5 in React?
              </button>
            </h2>
            <div
              id="question-two"
              className="accordion-collapse collapse"
              data-bs-parent="#questions
              "
            >
              <div className="accordion-body">
                Here are a few ways to use Bootstrap 5 with React JS: Download
                the raw compiled code or source files and include it locally on
                your React JS app. Use Content Delivery Network (CDN) via
                jsDeliver cached version of Bootstrap's compiled CSS and JS to
                your React JS app project.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                Does Bootstrap 5 require Popper?
              </button>
            </h2>
            <div
              id="question-three"
              className="accordion-collapse collapse"
              data-bs-parent="#questions
              "
            >
              <div className="accordion-body">
                Many of our components require the use of JavaScript to
                function. Specifically, they require our own JavaScript plugins
                and Popper.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                Is Bootstrap a design system?
              </button>
            </h2>
            <div
              id="question-four"
              className="accordion-collapse collapse"
              data-bs-parent="#questions
            "
            >
              <div className="accordion-body">
                Bootstrap and other frameworks like it have been used as a
                foundation for design systems for smaller companies that don't
                have the resources to build their own. As you can see below,
                Bootstrap is very similar to corporate design systems like the
                one shown above.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
