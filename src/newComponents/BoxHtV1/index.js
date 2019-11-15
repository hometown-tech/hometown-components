import React from 'react';
import styled from 'styled-components';
import { Box as RebassBox } from 'rebass/styled-components';
import position from '@styled-system/position';

const Box = styled(({ ...rest }) => <RebassBox {...rest} />)`
  ${position}
`;

export default Box;
