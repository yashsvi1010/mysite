import React from "react";

function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="content proj-content">
            <h2
              className=" fw-bolder"
              style={{ borderBottom: " 2px solid rgba(45, 46, 50, 0.5)" }}
            >
              Portfolio
            </h2>
            <div className=" proj-items">
              <div className="container proj-container items proj-1">
                <div className="proj-img-1">
                  <img
                    src={require("../images/mapty-proj-img.jpg")}
                    alt="map"
                    style={{
                      height: " 15rem",
                      width: "20rem",
                      borderRadius: "5%",
                    }}
                  />
                </div>
                <div className="proj-text">
                  <h3 className="fw-bold">Project 1</h3>
                  <p>
                    Description- Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ut nobis obcaecati molestias labore nihil
                    molestiae corporis nostrum quo numquam veniam exercitationem
                    quae earum sunt fugiat similique consectetur, debitis quis
                    facilis?
                  </p>
                  <p>
                    Hey, my name is Yashsvi, and I'm a Frontend Developer. My
                    passion is to create and develop a clean UI/UX for my users.
                    My main stack currently is ReactJs in combination with
                    JavaScript CSS and HTML5.
                  </p>
                  <div className="skill-used">
                    <ul className="fs-5 fw-bold">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Project -2 */}
              <div className="container proj-container items  proj-2">
                <div className="proj-img-2">
                  <img
                    src={require("../images/notepad-proj-img.jpg")}
                    alt=""
                    style={{
                      height: " 15rem",
                      width: "20rem",
                      borderRadius: "5%",
                    }}
                  />
                </div>
                <div className="proj-text">
                  <h3 className="fw-bold">Project 2</h3>
                  <p>
                    Description- Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ut nobis obcaecati molestias labore nihil
                    molestiae corporis nostrum quo numquam veniam exercitationem
                    quae earum sunt fugiat similique consectetur, debitis quis
                    facilis?
                  </p>
                  <p>
                    Hey, my name is Yashsvi, and I'm a Frontend Developer. My
                    passion is to create and develop a clean UI/UX for my users.
                    My main stack currently is ReactJs in combination with
                    JavaScript CSS and HTML5.
                  </p>
                  <div className="skill-used">
                    <ul className="fs-5 fw-bold">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
