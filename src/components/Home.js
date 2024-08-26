import React from "react";

function Home() {
  return (
    <>
      <section
        className="d-flex"
        id="home"
        style={{
          flexDirection: "column",
          height: "100vh",
          position: "relative",
        }}
      >
        <div className="container ms-auto my-2 home">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col my-3 home-text">
                <h1>Front-End React Developer</h1>
                <p>
                  Hi, I'm Yashsvi Singh. A passionate Front-end React Developer
                  based in India.
                </p>
              </div>
              <div className="col col-image">
                <div className="image card-img-top"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
