const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">10</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Rebecca Nwovu</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                Hey there! I am Rebecca, a passionate Product Designer who loves
                to blend simple and creative digital experience with
                problem-solving to create products that are both functional and
                delightful. When I'm not designing, I'm probably listening to
                music on the beach or readingAlways curious, Always learning.
                Let's build something amazing together!
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              <img src="img/signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
