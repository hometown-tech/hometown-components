import React from 'react';
import styled from 'styled-components';

const MasonryGrid = styled(({ ...rest }) => <article {...rest} />)`
  -moz-column-width: 350px;
  -webkit-column-width: 350px;
  -moz-column-gap: 20px;
  -webkit-column-gap: 20px; 
`;

export default MasonryGrid;
