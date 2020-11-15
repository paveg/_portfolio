import * as React from 'react';
import styled from 'styled-components';
import Color from '../lib/color';

type Props = {
  children: React.ReactNode;
};

const WrapperDiv = styled.div`
  padding: 20px;
  text-align: center;
  color: ${Color.black};
  background-color: ${Color.gray};
`;

const Wrapper: React.FC = ({ children }: Props) => <WrapperDiv>{children}</WrapperDiv>;

export default Wrapper;
