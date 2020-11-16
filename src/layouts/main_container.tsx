import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from '../lib/color';
import Wrapper from '../components/wrapper';

const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 100%;
    display: flex;
    width: 100%;
  }
`;

const SideContent = styled(Wrapper)`
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 35vw;
    border-bottom: 1px solid;
    border-bottom-color: ${Color.white};
  }
`;

const MainContent = styled.div`
  padding: 20px;
  background-color: ${Color.white};
  @media screen and (min-width: 768px) {
    flex: 1;
    order: 2;
    width: 65vw;
  }
`;

type Props = {
  side: React.ReactNode;
  main: React.ReactNode;
};

const MainContainer: React.FC<Props> = ({ side, main }) => (
  <FlexContainer>
    <SideContent>{side}</SideContent>
    <MainContent>{main}</MainContent>
  </FlexContainer>
);

MainContainer.propTypes = {
  side: PropTypes.element.isRequired,
  main: PropTypes.element.isRequired,
};

export default MainContainer;
