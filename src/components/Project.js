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
              Projects
            </h2>
            <div className=" proj-items">
              <div className="container proj-container items proj-1">
                <div className="proj-img-1">
                  <img
                    src={require("../images/fooders-proj.png")}
                    alt="map"
                    style={{
                      height: " 15rem",
                      width: "20rem",
                      borderRadius: "5%",
                    }}
                  />
                </div>
                <div className="proj-text">
                  {/* <h3 className="fw-bold">Fooders</h3> */}
                  <a
                    className="fw-bold fs-2"
                    href="https://fooders-yashsvi.netlify.app/"
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                  >
                    Fooders
                    <i className="fa-solid fa-arrow-up-right-from-square mx-3"></i>
                  </a>

                  <h5>A Recipe Search App</h5>
                  <p>
                    Fooders is a sleek and interactive recipe search application
                    built with HTML, SASS, and JavaScript. It allows users to
                    search for delicious recipes, view detailed cooking
                    instructions, and bookmark their favorite dishes. The app
                    features a modern UI with a gradient theme, dynamic search
                    results, and a responsive design for seamless browsing
                    across devices. With intuitive navigation and smooth
                    animations, Fooders enhances the cooking experience by
                    making recipe discovery effortless and engaging.
                  </p>
                  <div className="skill-used">
                    <ul className="fs-5 fw-bold">
                      <li>HTML</li>
                      <li>SASS</li>
                      <li>JS</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Project -2 */}
              <div className="container proj-container items  proj-2">
                <div className="proj-img-2">
                  <img
                    src={require("../images/banque-proj.PNG")}
                    alt=""
                    style={{
                      height: " 15rem",
                      width: "20rem",
                      borderRadius: "5%",
                    }}
                  />
                </div>
                <div className="proj-text">
                  {/* <h3 className="fw-bold">BANQUE</h3> */}
                  <a
                    className="fw-bold fs-2"
                    href="https://banque-yashsvi.netlify.app/"
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                  >
                    BANQUE
                    <i className="fa-solid fa-arrow-up-right-from-square mx-3"></i>
                  </a>
                  <h5>Expense Manager Web App</h5>
                  <p>
                    Banque is a user-friendly expense manager web app built with
                    HTML, CSS, and JavaScript. Designed to help users track and
                    manage their financial transactions effortlessly. Built with
                    a sleek and intuitive interface, Banque allows users to log
                    expenses, categorize spending, and visualize financial
                    trends. With features like budget tracking, spending
                    analytics, and real-time updates, Banque simplifies personal
                    finance management, ensuring users stay in control of their
                    expenses.
                  </p>
                  <p className=" fw-bold">
                    *Use UserId= sc & Password= 1111 for demo login
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
              <div className="container proj-container items proj-1">
                <div className="proj-img-1">
                  <img
                    src={require("../images/newshooter-proj.png")}
                    alt="map"
                    style={{
                      height: " 15rem",
                      width: "20rem",
                      borderRadius: "5%",
                    }}
                  />
                </div>
                <div className="proj-text">
                  {/* <h3 className="fw-bold">NewsHooter</h3> */}
                  <a
                    className="fw-bold fs-2"
                    href="https://newhooter.netlify.app/"
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                  >
                    NewsHooter
                    <i className="fa-solid fa-arrow-up-right-from-square mx-3"></i>
                  </a>
                  <h5>Scroll for latest news</h5>
                  <p>
                    NewsHooter is a dynamic news aggregator web app that
                    delivers the latest headlines across various categories,
                    including Science, Technology, Health, and more. Built with
                    React, the app fetches real-time news updates from multiple
                    sources, presenting them in a visually appealing and
                    responsive interface. Users can seamlessly scroll through
                    top articles, read summaries, and access full stories with a
                    single click. With its clean UI and smooth navigation,
                    NewsHooter offers an engaging experience for staying
                    informed on trending topics.
                  </p>
                  <div className="skill-used">
                    <ul className="fs-5 fw-bold">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>REACT</li>
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
