import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "Website Developer",
        "template_wr8ap0n",
        form.current,
        {
          publicKey: "_mzcfLbn-IGDs2IEs",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* Heading */}

        <div className="contact-heading">

          <p className="section-subtitle">
            Get In Touch
          </p>

          <h2>
            Let's Work <span>Together</span>
          </h2>

          <p>
            Have a project in mind, want to collaborate, or simply
            want to say hello? Feel free to get in touch.
          </p>

        </div>


        {/* Contact Content */}

        <div className="contact-grid">

          {/* Left Side */}

          <div className="contact-info">

            <h3>
              Let's start a conversation.
            </h3>

            <p>
              I'm always open to discussing new projects,
              creative ideas, internship opportunities, or
              potential collaborations.
            </p>


            <div className="contact-details">

              {/* Email */}

              <div className="contact-item">

                <div className="contact-icon">
                  @
                </div>

                <div>
                  

                  <a href="mailto:malaikanadeemdeo@gmail.com">
                    malaikanadeemdeo@gmail.com
                  </a>
                </div>

              </div>


              {/* LinkedIn */}

              <div className="contact-item">

                <div className="contact-icon">
                  in
                </div>

                <div>
                

                  <a
                    href="https://www.linkedin.com/in/malaika-nadeem-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.linkedin.com/in/malaika-nadeem-dev
                  </a>
                </div>

              </div>


              {/* GitHub */}

              <div className="contact-item">

                <div className="contact-icon">
                  GH
                </div>

                <div>
                  

                  <a
                    href="https://github.com/malaika-nadeem-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/malaika-nadeem-dev
                  </a>
                </div>

              </div>


              {/* WhatsApp */}

              <div className="contact-item">

                <div className="contact-icon">
                  WA
                </div>

                <div>
                  

                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +92 321 6916313
                  </a>
                </div>

              </div>

            </div>

          </div>


          {/* Right Side — Form */}

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >

            {/* Hidden time field */}

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />


            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit"
            >

              <span>
                Send Message
              </span>

              <span className="contact-arrow">
                →
              </span>

            </button>


            {/* Status Message */}

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;