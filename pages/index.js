import dynamic from "next/dynamic";

import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";

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
    </Layout>
  );
};
export default Index;
