import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

const Icon = styled(({ children, ...rest }) => (
  <Box as="svg" {...rest}>
    {children}
  </Box>
))`
  &:focus {
    outline: none;
  }
`;

Icon.defaultProps = {
};

export default Icon;
