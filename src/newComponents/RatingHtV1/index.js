import React from 'react';
import { Box as RebassBox } from 'rebass/styled-components';
import PropTypes from 'prop-types';

// const RatingContainer = styled.span`
//   margin-right: 0.3125rem;
//   margin-left: ${props => props.ml};
//   color: #FFF;
//   font-size: 11px;
//   padding: 2px 5px 3px;
//   vertical-align: middle;
//   background: ${props => props.color};
//   position: relative;
//   top: -2px;
// `;

const RatingHtV1 = ({ rating, color, ...rest }) => (
  <RebassBox
    textAlign="center"
    fontSize={14}
    bg={color}
    px={5}
    py={6}
    width={55}
    borderRadius={4}
    color="white"
    {...rest}
  >★ {rating}</RebassBox>
);

RatingHtV1.defaultProps = {
  rating: '',
  color: '#fa1b36',
};

RatingHtV1.propTypes = {
  rating: PropTypes.string,
  color: PropTypes.string,
};

export default RatingHtV1;
