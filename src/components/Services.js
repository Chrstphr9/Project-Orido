import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "UI/UX Design",
    img: "img/service/1.svg",
    description: [
      "I design clean, intuitive interfaces that not only look great but also deliver a seamless experience. My approach is rooted in empathy and functionality—I make sure users feel at home from their very first interaction.",
    ],
  },
  {
    name: "User Research",
    img: "img/service/2.png",
    description: [
      "I believe great design starts with understanding people. I conduct interviews, surveys, and usability tests to uncover insights that shape user-focused solutions and improve product performance.",
    ],
  },
  {
    name: "UI Animation",
    img: "img/service/1.svg",
    description: [
      "I use subtle animations to add life and clarity to user interfaces. Whether it’s a hover effect or a complex micro-interaction, my animations help guide users and make every click feel satisfying.",
    ],
  },
  {
    name: "Product Design",
    img: "img/service/1.svg",
    description: [
      "From the first sketch to the final prototype, I design products that solve real problems and bring ideas to life. I focus on functionality, consistency, and delight—turning concepts into experiences people love.",
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
