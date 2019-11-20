import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonHtV1 from 'newComponents/ButtonHtV1';
import RowHtV1 from 'newComponents/RowHtV1';
import BoxHtV1 from 'newComponents/BoxHtV1';
import LabelHtV1 from 'newComponents/LabelHtV1';
import FormInputHtV1 from './FormInputHtV1';

export default class LoginFormHtV1 extends Component {
  render() {
    const {
      email,
      password,
      onChangeEmail,
      onChangePassword,
      emailFeedBackError,
      emailFeedBackMessage,
      passwordFeedBackError,
      passwordFeedBackMessage,
      onSubmitLogin,
      loginResponse,
      signupUrl,
      forgotUrl
    } = this.props;
    return (
      <form onSubmit={onSubmitLogin}>
        <FormInputHtV1
          label="Email ID *"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <RowHtV1 ml="0" mr="0" mt="0.625rem">
          <BoxHtV1 pt="6px">
            <FormInputHtV1
              label="Password *"
              type="password"
              placeholder=""
              onChange={onChangePassword}
              value={password}
              feedBackError={passwordFeedBackError}
              feedBackMessage={passwordFeedBackMessage}
            />
            <LabelHtV1 color="primary" display="block" textAlign="right">
              <Link to={forgotUrl} color="primary">Forgot Password?</Link>
            </LabelHtV1>
          </BoxHtV1>
        </RowHtV1>
        <RowHtV1 ml="0" mr="0" mt="0.625rem">
          <BoxHtV1 pt="3px">
            <LabelHtV1 color="textDark" mr="0.3126rem">
              Don't have an account?
            </LabelHtV1>
            <Link to={signupUrl}>
              <LabelHtV1 color="primary" fontSize="13px">Sign Up</LabelHtV1>
            </Link>
          </BoxHtV1>
          <BoxHtV1>
            <ButtonHtV1
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="36px"
              disabled={loginResponse.loggingIn}
              fontSize="0.875rem"
            >
              {(loginResponse && !loginResponse.loggingIn) ? 'LOGIN' : 'Please wait...' }
            </ButtonHtV1>
          </BoxHtV1>
        </RowHtV1>
        {(loginResponse && loginResponse.loaded && loginResponse.isLoggedIn) &&
          <LabelHtV1
            type="success"
            ta="center"
            fontSize="0.875rem"
            mt="1rem"
            display="block"
          > Login Success ! </LabelHtV1>
        }
      </form>
    );
  }
}

LoginFormHtV1.defaultProps = {
  email: '',
  password: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  passwordFeedBackError: false,
  passwordFeedBackMessage: '',
  loginResponse: {},
  onChangeEmail: () => {},
  onChangePassword: () => {},
  onSubmitLogin: () => {},
  signupUrl: '',
  forgotUrl: ''
};

LoginFormHtV1.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitLogin: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  passwordFeedBackError: PropTypes.bool,
  passwordFeedBackMessage: PropTypes.string,
  loginResponse: PropTypes.object,
  signupUrl: PropTypes.string,
  forgotUrl: PropTypes.string
};
