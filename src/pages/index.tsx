import * as React from 'react';
import loadable from '@loadable/component';

const MainContainer = loadable(() => import('../layouts/main_container'));
const SideContent = loadable(() => import('../layouts/side_content'));

const Home: React.FC = ({}) => (
  <>
    <MainContainer side={<SideContent />} main={<>writing</>} />
  </>
);

export default Home;
