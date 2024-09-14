import React from "react";

function About() {
  return (
    <>
      <section className="about-sec" id="about">
        <div className="container">
          <div className="content about-content">
            <div className="items about-items">
              <div className="about-img ">
                <img
                  src={require("../images/laptop-img.jpg")}
                  alt="laptop"
                  style={{
                    height: " 15rem",
                    width: "20rem",
                    borderRadius: "5%",
                  }}
                />
              </div>
              <div className="about-text">
                <h4
                  className="fw-bolder"
                  style={{ borderBottom: " 2px solid rgba(45, 46, 50, 0.5)" }}
                >
                  About me
                </h4>
                <h3>Front-end Developer based in India 📍</h3>
                <p style={{ textAlign: "left" }}>
                  As a Junior Front-End Developer, I possess an impressive
                  arsenal of skills in HTML, CSS, JavaScript and React. I excel
                  in designing and maintaining responsive websites that offer a
                  smooth user experience. My expertise lies in crafting dynamic;
                  engaging interfaces through writing clean and optimized code
                  and utilizing cutting-edge development tools and techniques. I
                  am also a team player who thrives in collaborating with
                  cross-functional teams to produce outstanding web applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
