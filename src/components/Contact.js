import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-sec">
        <div className="container">
          <div className="content contact-content">
            <h3
              className="text-start fw-bold"
              style={{ borderBottom: " 2px solid rgba(45, 46, 50, 0.5)" }}
            >
              Contact
            </h3>
            <h2 className="text-start fw-bold my-4">
              Don't be shy! Hit me up!
            </h2>
            <div className="container-details">
              <div className="contact-loc">
                <h3>Location</h3>
                <p>📍 UP, India </p>
              </div>
              <div className="contact-mail">
                <h3>
                  <i class="fa-solid fa-envelope"></i> Mail us
                </h3>
                <a
                  className="contact-mail"
                  href="mailto:yashsvisingh97@gmail.com"
                >
                  yashsvisingh97@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
