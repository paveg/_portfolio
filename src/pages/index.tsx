import * as React from 'react';
import MainContainer from '../layouts/main_container';
import Footer from '../layouts/footer';

const Home: React.FC = () => (
  <>
    <MainContainer side={<>profile</>} main={<>writing</>} />
    <Footer />
  </>
);

export default Home;
