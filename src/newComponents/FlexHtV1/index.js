import React from 'react';
import styled from 'styled-components';
import { Flex as RebassFlex } from 'rebass/styled-components';
import position from '@styled-system/position';

const Flex = styled(({ ...rest }) => <RebassFlex {...rest} />)`
  ${position}
`;

export default Flex;
