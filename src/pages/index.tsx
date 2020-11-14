import * as React from 'react';
import MainContainer from '../layouts/main_container';
import Footer from '../layouts/footer';
import SideContent from '../layouts/side_content';

const Home: React.FC = () => (
  <>
    <MainContainer side={<SideContent />} main={<>writing</>} />
    <Footer />
  </>
);

export default Home;
