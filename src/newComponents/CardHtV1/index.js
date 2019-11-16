import React from 'react';
import styled from 'styled-components';
import { Card as RebaseCard } from 'rebass/styled-components';

const Card = styled(({ ...rest }) => <RebaseCard {...rest} />)`
`;

export default Card;
