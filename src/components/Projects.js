import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  // const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Product</span>
                      <h3 className="title">
                        <span>Car Rental App</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://www.behance.net/gallery/223405813/Goluxe-Car-Rental-App-Case-Study"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href="https://www.behance.net/gallery/223537929/EdTech-App-Case-Study"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="list_inner orido_tm_full_link popup-vimeo"
                  >
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Product</span>
                      <h3 className="title">
                        <span>EdTech Web App</span>
                      </h3>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href="https://www.behance.net/gallery/223609915/Figolabs-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="list_inner orido_tm_full_link soundcloude_link mfp-iframe audio"
                  >
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Product</span>
                      <h3 className="title">
                        <span>AI Solutions Platform</span>
                      </h3>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
