import { Swiper, SwiperSlide } from "swiper/react";
import { partnersSliderProps } from "../sliderProps";
const partnersLogo = {
  light: [
    "img/partners/1.svg",
    "img/partners/2.svg",
    "img/partners/3.svg",
    "img/partners/4.svg",
  ],
  dark: [
    "img/partners/light/1.svg",
    "img/partners/light/2.svg",
    "img/partners/light/3.svg",
    "img/partners/light/4.svg",
    "img/partners/light/5.png",
    "img/partners/light/6.png",
    "img/partners/light/7.png",
    "img/partners/light/8.png",
  ],
};
const Partners = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_partners">
        <div className="container">
          <div className="partners_list">
            <Swiper {...partnersSliderProps} className="owl-carousel">
              {partnersLogo[dark ? "dark" : "light"].map((partnersLogo, i) => (
                <SwiperSlide className="item" key={i}>
                  <a href="#">
                    <img src={partnersLogo} alt="" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
