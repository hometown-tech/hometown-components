import React from 'react';
import styled from 'styled-components';
import Box from 'newComponents/BoxHtV1';

const Relative = styled(({ ...rest }) => <Box {...rest} sx={{ position: 'relative' }} />)``;

export default Relative;
