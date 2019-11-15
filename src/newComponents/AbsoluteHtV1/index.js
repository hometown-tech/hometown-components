import React from 'react';
import styled from 'styled-components';
import Box from 'newComponents/BoxHtV1';

const Absolute = styled(({ ...rest }) => <Box {...rest} sx={{ position: 'absolute' }} />)`
`;

export default Absolute;
