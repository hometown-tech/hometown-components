import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonHtV1 from 'newComponents/ButtonHtV1';
import RowHtV1 from 'newComponents/RowHtV1';
import BoxHtV1 from 'newComponents/BoxHtV1';
import LabelHtV1 from 'newComponents/LabelHtV1';
import FormInputHtV1 from './FormInputHtV1';

export default class SignupForm extends Component {
  render() {
    const {
      email,
      phone,
      password,
      onChangeEmail,
      onChangePhone,
      onChangePassword,
      emailFeedBackError,
      emailFeedBackMessage,
      phoneFeedBackError,
      phoneFeedBackMessage,
      passwordFeedBackError,
      passwordFeedBackMessage,
      onSubmitSignup,
      loading,
      loginUrl,
      phonemandatory
    } = this.props;
    return (
      <form onSubmit={onSubmitSignup}>
        <FormInputHtV1
          label="Email ID *"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <FormInputHtV1
          label={phonemandatory ? 'Phone *' : 'Phone'}
          type="text"
          placeholder=""
          onChange={onChangePhone}
          value={phone}
          feedBackError={phoneFeedBackError}
          feedBackMessage={phoneFeedBackMessage}
        />
        <FormInputHtV1
          label="Password *"
          type="password"
          placeholder=""
          onChange={onChangePassword}
          value={password}
          feedBackError={passwordFeedBackError}
          feedBackMessage={passwordFeedBackMessage}
        />
        <RowHtV1 ml="0" mr="0" mt="1.25rem">
          <BoxHtV1 pt="6px">
            <LabelHtV1 color="textDark" mr="0.3126rem">
              Already have an account.?
            </LabelHtV1>
            <Link to={loginUrl}>
              <LabelHtV1 color="primary">Sign in</LabelHtV1>
            </Link>
          </BoxHtV1>
          <BoxHtV1>
            <ButtonHtV1
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="42px"
              disabled={loading}
              fontSize="0.875rem"
            >
              {!loading ? 'SIGN UP' : 'Please wait...' }
            </ButtonHtV1>
          </BoxHtV1>
        </RowHtV1>
      </form>
    );
  }
}

SignupForm.defaultProps = {
  email: '',
  phone: '',
  password: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  phoneFeedBackError: false,
  phoneFeedBackMessage: '',
  passwordFeedBackError: false,
  passwordFeedBackMessage: '',
  onChangeEmail: () => {},
  onChangePhone: () => {},
  onChangePassword: () => {},
  onSubmitSignup: () => {},
  loading: false,
  loginUrl: '',
  phonemandatory: true,
};

SignupForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitSignup: PropTypes.func,
  email: PropTypes.string,
  phone: PropTypes.string,
  password: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  phoneFeedBackError: PropTypes.bool,
  phoneFeedBackMessage: PropTypes.string,
  passwordFeedBackError: PropTypes.bool,
  passwordFeedBackMessage: PropTypes.string,
  loading: PropTypes.bool,
  loginUrl: PropTypes.string,
  phonemandatory: PropTypes.bool,
};
