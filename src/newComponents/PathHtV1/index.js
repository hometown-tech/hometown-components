import React from 'react';
import PropTypes from 'prop-types';

/**
 * Rebass Components
 */
import Box from '../BoxHtV1';

const Path = props => (
  <Box
    as="path"
    {...props}
    sx={{
      fill: props.theme.colors[props.fill]
    }}
  />
);

Path.propTypes = {
  fill: PropTypes.string
};

Path.defaultProps = {
  fill: 'primaryText'
};

export default Path;

