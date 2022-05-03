import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top
    "
      >
        <div className="container ">
          <a href="/" className="navbar-brand">
            Bootstrap 5 course
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  What You'll Learn
                </a>
              </li>
              <li className="nav-item">
                <a href="#question" className="nav-link">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
