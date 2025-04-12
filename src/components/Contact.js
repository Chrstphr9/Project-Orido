const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <img
                  className="anim_circle"
                  src="img/contact/video.png"
                  alt=""
                />
                <img className="svg" src="img/svg/play.svg" alt="" />
              </a>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Connect With Me <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="#">
                    hello@rebeccanwovu.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="https://www.behance.net/beccasimon1">
                      <img className="svg" src="img/svg/social/be.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/Nwovu-Rebecca">
                      <img
                        className="svg"
                        src="img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/becca.sznn?igsh=a2Y4dGlwN3hxd3Nv">
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
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
