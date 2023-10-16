import React from "react";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand fw-bold me-5" href="/">
              CreoNexa
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto me-0">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
                <a className="nav-link" href="#experience">
                  Experience
                </a>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
