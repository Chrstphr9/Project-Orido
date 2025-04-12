import dynamic from "next/dynamic";

import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";
import Home from "../src/components/Home";
import About from "../src/components/About";
import ExpertAreas from "../src/components/ExpertAreas";
import Services from "../src/components/Services";

// const Projects = dynamic(() => import("../src/components/Projects"), {
//   ssr: false,
// });
// const Partners = dynamic(() => import("../src/components/Partners"), {
//   ssr: false,
// });

const Index = () => {
  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Home />
      <About />
      <ExpertAreas />
    </Layout>
  );
};
export default Index;
