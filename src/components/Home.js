import React from "react";

function Home() {
  return (
    <>
      <section className="home-sec" id="home">
        <div className="container home-container">
          <div className="content home-content">
            <div className="items home-items">
              <div className="home-text">
                <h2 className="fw-bolder">Front-End React Developer</h2>
                <p>
                  Hi, I'm Yashsvi Singh. A passionate Front-end React Developer
                  based in India.
                </p>
                <span></span>
              </div>
              <div className="home-img"></div>
            </div>
            <div className="skills">
              <p className="fs-4 fw-bolder">Tech Stack</p>
              <div className="skill-logo">
                <ul>
                  <li>
                    <img
                      src={require("../images/html-logo-img.png")}
                      alt="html"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../images/css-logo-img.png")}
                      alt="css"
                    />
                  </li>
                  <li>
                    <img src={require("../images/js-logo-img.png")} alt="JS" />
                  </li>
                  <li>
                    <img
                      src={require("../images/react-logo-img.png")}
                      alt="React"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
