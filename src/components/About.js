import React from "react";

function About() {
  return (
    <>
      <section id="about">
        <div className="container my-3">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <img
                  className="about-image"
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="col">
                <h2>This is About content</h2>
                <p className="ms-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat, autem? Et aspernatur maxime a expedita!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  mollitia aliquam eaque, iure dolorum commodi dolor soluta
                  magnam hic possimus nesciunt laudantium aperiam cum veniam
                  voluptatem et est voluptatum? Molestias.
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
