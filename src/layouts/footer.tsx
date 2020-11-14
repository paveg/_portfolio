import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #222;
  color: #fff;
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
