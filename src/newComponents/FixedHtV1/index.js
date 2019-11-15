import React from 'react';
import styled from 'styled-components';
import Box from 'newComponents/BoxHtV1';

const Fixed = styled(({ ...rest }) => <Box {...rest} sx={{ position: 'fixed' }} />)`
`;

export default Fixed;
