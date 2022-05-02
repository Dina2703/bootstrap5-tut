import React from "react";

function Learn() {
  return (
    <>
      <section className="p-5" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="/learn.svg" alt="learn" className="img-fluid" />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                earum, vel vitae molestias, eligendi sunt itaque, iure ad nisi
                autem repellat veritatis non quos? Vitae explicabo placeat error
                corporis quo.
              </p>
              <a href="/" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark text-light" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                earum, vel vitae molestias, eligendi sunt itaque, iure ad nisi
                autem repellat veritatis non quos? Vitae explicabo placeat error
                corporis quo.
              </p>
              <a href="/" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img src="/react.svg" alt="learn" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Learn;
