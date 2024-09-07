import React from "react";

function About() {
  return (
    <>
      <section className="about-sec" id="about">
        <div className="container">
          <div className="content about-content">
            <div className="items">
              <div className="about-img"></div>
              <div className="about-text">
                <h4>About me</h4>
                <h3>Front-end Developer based in India 📍</h3>
                <p>
                  {" "}
                  Hey, my name is Yashsvi, and I'm a Frontend Developer. My
                  passion is to create and develop a clean UI/UX for my users.
                  My main stack currently is ReactJs in combination with
                  JavaScript CSS and HTML5.
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
