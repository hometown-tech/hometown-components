import React from 'react';
import styled from 'styled-components';
import { Image as RebaseImage } from 'rebass/styled-components';

const Image = styled(({ ...rest }) => <RebaseImage {...rest} />)`
`;

export default Image;
