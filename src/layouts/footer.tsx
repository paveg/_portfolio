import * as React from 'react';
import Wrapper from '../components/wrapper';
import styled from 'styled-components';

const CopyRight = styled.span`
  font-size: 0.8rem;
`;

const Footer: React.FC = () => (
  <Wrapper>
    <address>
      <CopyRight>© 2020 Ryota Ikezawa</CopyRight>
    </address>
  </Wrapper>
);

export default Footer;
