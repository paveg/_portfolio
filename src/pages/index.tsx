import * as React from "react";
import loadable from "@loadable/component";

const MainContainer = loadable(() => import("../layouts/main_container"));
const SideContent = loadable(() => import("../layouts/side_content"));
const Footer = loadable(() => import("../layouts/footer"));

const Home: React.FC = () => (
  <React.Fragment>
    <MainContainer side={<SideContent />} main={<>writing</>} />
    <Footer />
  </React.Fragment>
);

export default Home;
