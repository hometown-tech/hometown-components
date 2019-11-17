import React from 'react';
import PropTypes from 'prop-types';
import Input from '../InputFieldHtV1';
import Box from '../Box';
import TextArea from '../TextAreaHtV1';
import Label from '../LabelHtV1';

const FormInput = ({
  label,
  name,
  type,
  feedBackMessage,
  feedBackError, ...rest
}) => {
  const inputProps = {
    type,
    name,
    feedBackMessage,
    feedBackError,
    ...rest
  };
  return (
    <Box mb="0.625rem">
      {!(type === 'hidden') &&
      <Label fontSize="0.875em" mb="0.625rem">{label}</Label>
      }
      {(type === 'text' || type === 'password' || type === 'email' || type === 'number' || type === 'hidden') && (
        <Input {...inputProps} name={name} />
      )}
      {type === 'textarea' && (
        <TextArea {...inputProps} name={name} />
      )}
      {feedBackError && !(type === 'hidden') && <Label type="error">{feedBackMessage}</Label>}
    </Box>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
  feedBackMessage: PropTypes.string,
  feedBackError: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  rows: PropTypes.number,
};

FormInput.defaultProps = {
  value: '',
  feedBackMessage: '',
  feedBackError: false,
  required: false,
  name: null,
  rows: 3,
  type: 'text'
};

export default FormInput;
