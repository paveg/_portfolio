import * as React from 'react';
import MainContainer from '../layouts/main_container';
import Footer from '../layouts/footer';
import OtherComponent from '../components/other_component';

const Home: React.FC = () => (
  <>
    <MainContainer side={<OtherComponent />} main={<>writing</>} />
    <Footer />
  </>
);

export default Home;
