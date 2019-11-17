import React from 'react';
/**
 * Rebass Components
 */
import Box from '../BoxHtV1';

const TextArea = props => (
  <Box
    as="textarea"
    variant="input"
    width={1}
    {...props}
    sx={{
      '&:focus': {
        outline: 'none'
      }
    }}
  />
);

export default TextArea;
