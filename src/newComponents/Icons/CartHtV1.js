import React from 'react';
import PropTypes from 'prop-types';
import Path from '../PathHtV1';
import Icon from '../Icon';

const CartHtV1 = ({ color, ...rest }) => (
  <Icon viewBox="0 0 24 24" {...rest}>
    {/* eslint-disable max-len */}
    <Path fill={color} fillRule="evenodd" d="M8 18c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 0 0 0-4m10 0c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 0 0 0-4M4 2H1.999v1.999H4l3.598 7.588-1.353 2.451A2 2 0 0 0 8 17h12v-2H8.423a.249.249 0 0 1-.249-.25l.03-.121L9.102 13h7.449c.752 0 1.408-.415 1.75-1.029l3.574-6.489A1 1 0 0 0 21 3.999H6.213l-.406-.854A1.997 1.997 0 0 0 4 2" />
  </Icon>
);

CartHtV1.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

CartHtV1.defaultProps = {
  color: 'primaryIcon',
  width: 24,
  height: 24
};

export default CartHtV1;
