import React from 'react';
import * as PropTypes from 'prop-types';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  // Please implements global layouts
  <>{children}</>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
};

export default Layout;
