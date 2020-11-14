import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const SideContent = styled.div`
  padding: 20px;
  background-color: #ccc;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

const MainContent = styled.div`
  padding: 20px;
  background-color: #efefef;
  @media screen and (min-width: 768px) {
    flex: 1;
    order: 2;
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
