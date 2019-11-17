import React from 'react';
/**
 * Rebass Components
 */
import Box from '../BoxHtV1';

const InputField = props => (
  <Box
    as="input"
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

export default InputField;
