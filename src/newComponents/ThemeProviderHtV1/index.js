import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ThemeHtV1 from 'newComponents/ThemeHtV1';

const ThemeProviderStyled = ({ children }) => (
  <ThemeProvider theme={ThemeHtV1}>
    {children}
  </ThemeProvider>
);

ThemeProviderStyled.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default ThemeProviderStyled;
