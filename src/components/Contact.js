import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // show spinner

    try {
      const response = await fetch("https://formspree.io/f/mwplyozd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      console.log("Form successfully submitted:", result);
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false); // hide spinner
    }
  };

  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          {/* Top content - Two column layout */}
          <div className="contact_inner">
            {/* Left side content */}
            <div className="contact_left">
              <div className="content_box">
                <div className="video_button">
                  <a
                    className="popup-youtube"
                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  >
                    <img className="anim_circle" src="" alt="" />
                    <img className="svg" src="img/svg/play.svg" alt="" />
                  </a>
                </div>
                <div className="text">
                  <h3>{`Let's`} work together</h3>
                  <p>
                    I’m always open to collaborating on meaningful, creative
                    projects. Whether you’re building from scratch or refining
                    an existing idea, let’s turn your vision into something
                    real!
                  </p>

                  <div className="short_info">
                    <ul>
                      <li>
                        <span className="name">Email:</span>
                        <p>
                          <a
                            className="line_effect"
                            href="mailto:hello@rebeccanwovu.com"
                          >
                            hello@rebeccanwovu.com
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="contact_right">
              <div className="contact_form_wrapper">
                <div className="form_title">
                  <h4>Connect With Me</h4>
                  {submitted && (
                    <div className="success_message">
                      Thank you for your message! I'll get back to you soon.
                    </div>
                  )}
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="contact_form"
                  method="POST"
                  action="https://formspree.io/f/mwplyozd"
                >
                  <div className="form_group">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="white_text"
                    />
                  </div>

                  <div className="form_group">
                    <label>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="white_text"
                    />
                  </div>

                  <div className="form_group">
                    <label>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="white_text"
                    />
                  </div>

                  <div className="form_group">
                    <label>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Message"
                      required
                      className="white_text"
                    ></textarea>
                  </div>

                  <div className="form_submit">
                    <div className="form_submit">
                      <button
                        type="submit"
                        className="orido_tm_button"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner"></span> Please wait...
                          </>
                        ) : (
                          <>
                            Send Message{" "}
                            {/* <img
                              className="svg"
                              src="img/svg/send.svg"
                              alt=""
                            /> */}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom section - Follow me */}
          <div className="connect">
            <div className="orido_tm_follow">
              <span>Follow me:</span>
              <ul>
                <li>
                  <a href="https://www.behance.net/beccasimon1"
                    target="_blank">
                    <img
                      className="svg"
                      src="img/svg/social/be.svg"
                      alt="Behance"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/Nwovu-Rebecca"
                  target="_blank">
                    <img
                      className="svg"
                      src="img/svg/social/dribbble.svg"
                      alt="Dribbble"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/becca.sznn?igsh=a2Y4dGlwN3hxd3Nv"
                  target="_blank">
                    <img
                      className="svg"
                      src="img/svg/social/instagarm.svg"
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
