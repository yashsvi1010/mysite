import React, { useState } from "react";

function Navbar() {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarNavAltMarkup");
    if (navbarCollapse.classList.contains("show")) {
      new window.bootstrap.Collapse(navbarCollapse).toggle();
    }
  };
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg  bg-body-tertiary h5 py-4"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="#home">
            <h2>Yashsvi.dev</h2>
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active"
                aria-current="page"
                href="#home"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
              <a
                className="nav-link"
                href="#about"
                onClick={handleNavLinkClick}
              >
                About
              </a>
              <a
                className="nav-link"
                href="#projects"
                onClick={handleNavLinkClick}
              >
                Projects
              </a>
              <a
                className="nav-link"
                href="#contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
