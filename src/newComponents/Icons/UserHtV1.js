import React from 'react';
import PropTypes from 'prop-types';
import Path from '../PathHtV1';
import Icon from '../Icon';

const UserHtV1 = ({ color, ...rest }) => (
  <Icon viewBox="0 0 24 24" {...rest}>
    {/* eslint-disable max-len */}
    <Path fill={color} fillRule="evenodd" d="M12.5 12C10.002 12 5 13.556 5 16.667V20h15v-3.333C20 13.557 15.001 12 12.5 12M8 8c0 2.208 1.795 4 4.006 4A3.993 3.993 0 0 0 16 8c0-2.207-1.781-4-3.994-4A4.005 4.005 0 0 0 8 8z" />
  </Icon>
);

UserHtV1.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

UserHtV1.defaultProps = {
  color: 'primaryIcon',
  width: 24,
  height: 24
};

export default UserHtV1;
