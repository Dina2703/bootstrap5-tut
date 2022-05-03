import React from "react";

function MapAddress() {
  return (
    <section className="p-5">
      <div className="container ">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location: </span> 50 Main st
                Chicago IL
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrolment Phone: </span> (555)
                555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrolment Phone: </span> (555)
                555-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone: </span> (333) 333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrolment Email: </span>
                example@gmail.com
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email: </span>
                example@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md">
            <img src="/map.svg" className="img-fluid" alt="map" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapAddress;
