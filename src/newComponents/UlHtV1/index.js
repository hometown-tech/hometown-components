import React from 'react';
import PropTypes from 'prop-types';
import Box from '../BoxHtV1';

const Ul = ({ listStyleType, ...rest }) => <Box as="ul" pl={0} {...rest} />;

Ul.propTypes = {
  listStyleType: PropTypes.string
};

Ul.defaultProps = {
  listStyleType: 'none'
};

export default Ul;
