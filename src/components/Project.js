import React from "react";

function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="content proj-content">
            <h3
              className="fw-bolder"
              style={{ borderBottom: " 2px solid rgba(45, 46, 50, 0.5)" }}
            >
              Portfolio
            </h3>
            <div className="proj-items">
              <div className="about-img-1">Image</div>
              <div className="about-text">
                <h4>Project 1</h4>
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
                <div className="skills-use">
                  <ul>
                    <li>React</li>
                    <li>JS</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
              {/* Project -2 */}
              <div className="about-img-2">
                <img
                  src={require("../images/notepad-proj-img.jpg")}
                  alt=""
                  style={{ height: " 20rem", width: "20rem" }}
                />
              </div>
              <div className="about-text">
                <h4>Project 2</h4>
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
                <div className="skills-use">
                  <ul>
                    <li>React</li>
                    <li>JS</li>
                    <li>CSS</li>
                  </ul>
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
