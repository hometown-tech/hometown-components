import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ThemeHtV1 from 'newComponents/ThemeHtV1';
import GlobalStyle from 'newComponents/ThemeHtv1/GlobalStyle';

const ThemeProviderStyled = ({ children }) => (
  <ThemeProvider theme={ThemeHtV1}>
    <GlobalStyle />
    <Fragment>
      {children}
    </Fragment>
  </ThemeProvider>
);

ThemeProviderStyled.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default ThemeProviderStyled;
