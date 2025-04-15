import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
  <Head>
    <title>ebecca Nwovu – Creative Product Designer | Seamless Digital Experiences</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" type="image/jpg" sizes="32x32" href="/favicon.jpg" />
    <meta 
          name="description" 
          content="Hi, I'm Rebecca – a product designer blending creativity and simplicity to craft seamless digital experiences. I build apps, create prototypes, and solve problems using AI and design tools." 
        />
        <meta 
          name="keywords" 
          content="Rebecca, product designer, creative designer, UX UI designer, digital product design, app design, AI designer, prototype designer, user experience, user interface, design portfolio" 
        />
    
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
      rel="stylesheet"
    />
  </Head>
  <Component {...pageProps} />
</Fragment>

  );
}

export default MyApp;
