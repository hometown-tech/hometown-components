import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Alert from 'components/Alert';
import Div from 'components/Div';

import Theme from 'components/Theme';

const Index = () => (
  <ThemeProvider theme={Theme}>
    <Fragment>
      <Alert show type="error" msg="Lorem Ipsum....Lorem Ipsum....Lorem Ipsum...." />
      <Div col={{ sm: 4, md: 8, lg: 12 }} m={{ sm: '10px', md: '20px', lg: '30px' }}>test</Div>
      <Div col={6} m="10px">Col 6</Div>
      <Div col="6" m="10px">Col 6</Div>
    </Fragment>
  </ThemeProvider>
);

render(<Index />, document.getElementById('root'));
