import React from 'react';
import PropTypes from 'prop-types';
import Path from '../PathHtV1';
import Icon from '../Icon';

const LocationHtV1 = ({ color, ...rest }) => (
  <Icon viewBox="0 0 24 24" {...rest}>
    {/* eslint-disable max-len */}
    <Path fill={color} fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </Icon>
);

LocationHtV1.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

LocationHtV1.defaultProps = {
  color: 'primaryIcon',
  width: 24,
  height: 24
};

export default LocationHtV1;
