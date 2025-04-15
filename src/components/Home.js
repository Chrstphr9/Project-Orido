const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                Rebecca Nwovu{" "}
                <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">Product Designer</span>
            </div>
            <div className="text">
              <p>
                {`Hi I'm Rebecca`} — a curious and creative product designer
                passionate about crafting intuitive and impactful digital
                experiences. I blend simplicity with innovation to design
                solutions that solve real problems. From building user-friendly
                apps to creating interactive prototypes, I leverage design tools
                and AI to bring ideas to life.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Connect with me{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
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
                <img className="svg" src="img/svg/social/dribbble.svg" alt="" />
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
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <img src={`img/hero/${dark ? 2 : 1}.jpg`} alt="" />
          {/* <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img className="anim_circle" src="img/hero/welcome.png" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
