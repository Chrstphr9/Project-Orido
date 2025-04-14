const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src={`img/testimonials/${dark ? 2 : 1}.jpg`} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “Working with Rebecca Nwovu was an absolute game-changer. She
                  not only understood our vision but elevated it with fresh
                  ideas and flawless execution”.
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>Benjamin O</span>
                </h3>
                <span className="job">Founder of Echooscar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
