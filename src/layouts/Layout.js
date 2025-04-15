import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataImage,
  hashtag_,
  imgToSVG,
  scrollSection,
  stickyNav,
} from "../utilits";
import PreLoader from "./PreLoader";
const Layout = ({ children }) => {
  useEffect(() => {
    imgToSVG();
    dataImage();
    hashtag_();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Rebecca Nwovu – Creative Product Designer | Seamless Digital Experiences</title>
        <meta 
          name="description" 
          content="Hi, I'm Rebecca – a product designer blending creativity and simplicity to craft seamless digital experiences. I build apps, create prototypes, and solve problems using AI and design tools." 
        />
        <meta 
          name="keywords" 
          content="Rebecca, product designer, creative designer, UX UI designer, digital product design, app design, AI designer, prototype designer, user experience, user interface, design portfolio" 
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/favicon.jpg" />
      </Head>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="orido_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};
export default Layout;
