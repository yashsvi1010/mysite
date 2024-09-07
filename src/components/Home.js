import React from "react";

function Home() {
  return (
    <>
      <section className="home-sec" id="home">
        <div className="container">
          <div className="content home-content">
            <div className="home-items">
              <div className="home-text">
                <h2>Front-End React Developer</h2>
                <p>
                  Hi, I'm Yashsvi Singh. A passionate Front-end React Developer
                  based in India.
                </p>
                <span></span>
              </div>
              <div className="home-img"></div>
            </div>
            <div className="skills">
              <p>Tech Stack</p>
              <div className="skill-logo">
                <ul>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>React</li>
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
