import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonHtV1 from 'newComponents/ButtonHtV1';
import RowHtV1 from 'newComponents/RowHtV1';
import BoxHtV1 from 'newComponents/BoxHtV1';
import LabelHtV1 from 'newComponents/LabelHtV1';
import FormInputHtV1 from './FormInputHtV1';

export default class ForgotPasswordForm extends Component {
  render() {
    const {
      email,
      onChangeEmail,
      emailFeedBackError,
      emailFeedBackMessage,
      onSubmitForgot,
      forgotResponse,
      loginUrl
    } = this.props;
    const { loading } = forgotResponse;
    return (
      <form onSubmit={onSubmitForgot}>
        <FormInputHtV1
          label="Email ID"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <RowHtV1 ml="0" mr="0" mt="1.25rem">
          <BoxHtV1 col="8" pt="6px">
            <LabelHtV1 color="textDark" mr="0.3126rem">
              Continue to
            </LabelHtV1>
            <Link to={loginUrl}>
              <LabelHtV1 color="primary">Sign in</LabelHtV1>
            </Link>
          </BoxHtV1>
          <BoxHtV1 col="4">
            <ButtonHtV1
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="42px"
              disabled={loading}
            >
              {(forgotResponse && !loading) ? 'SUBMIT' : 'Please wait...' }
            </ButtonHtV1>
          </BoxHtV1>
        </RowHtV1>
      </form>
    );
  }
}

ForgotPasswordForm.defaultProps = {
  email: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  forgotResponse: {},
  onChangeEmail: () => {},
  onSubmitForgot: () => {},
  loginUrl: ''
};

ForgotPasswordForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onSubmitForgot: PropTypes.func,
  email: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  forgotResponse: PropTypes.object,
  loginUrl: PropTypes.string
};
