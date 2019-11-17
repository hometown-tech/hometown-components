import React from 'react';
import PropTypes from 'prop-types';
import Path from '../Path';
import Icon from '../Icon';

const Fav = ({ color, ...rest }) => (
  <Icon viewBox="0 0 24 24" {...rest}>
    {/* eslint-disable max-len */}
    <Path fill={color} fillRule="evenodd" d="M12 8c-.67-1.732-2.547-3-4.5-3C4.957 5 3 6.932 3 9.5c0 3.529 3.793 6.258 9 11.5 5.207-5.242 9-7.971 9-11.5C21 6.932 19.043 5 16.5 5c-1.955 0-3.83 1.268-4.5 3z" />
  </Icon>
);

Fav.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

Fav.defaultProps = {
  color: 'primaryIcon',
  width: 24,
  height: 24
};

export default Fav;
