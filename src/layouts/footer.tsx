import * as React from 'react';
import styled from 'styled-components';
import Color from '../lib/color';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  height: 5vh;
  background-color: ${Color.gray};
  color: ${Color.black};
`;

const CopyRight = styled.div`
  text-align: left;
`;

const Footer: React.FC = () => (
  <Wrapper>
    <CopyRight>© 2020 Ryota Ikezawa</CopyRight>
  </Wrapper>
);

export default Footer;
