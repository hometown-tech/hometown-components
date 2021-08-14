import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label, FeedBackMessage } from 'components/Label';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';

export default class SignupForm extends Component {
  render() {
    const {
      name,
      email,
      phone,
      date,
      password,
      gender,
      city,
      onChangeName,
      onChangeEmail,
      onChangePhone,
      onChangePassword,
      onChangeGender,
      onChangeCity,
      emailFeedBackError,
      emailFeedBackMessage,
      nameFeedBackError,
      nameFeedBackMessage,
      phoneFeedBackError,
      phoneFeedBackMessage,
      passwordFeedBackError,
      passwordFeedBackMessage,
      genderFeedBackError,
      genderFeedBackMessage,
      cityFeedBackError,
      cityFeedBackMessage,
      onSubmitSignup,
      loading,
      loginUrl,
      phonemandatory,
      onChangePolicy,
      policyAccepted,
      dobFeedBackMessage,
      dobFeedBackError
    } = this.props;
    return (
      <form onSubmit={onSubmitSignup}>
        <FormInput
          label="Full Name *"
          type="text"
          placeholder=""
          onChange={onChangeName}
          value={name}
          feedBackError={nameFeedBackError}
          feedBackMessage={nameFeedBackMessage}
        />
        <FormInput
          label="Email ID *"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
        />
        <FormInput
          label={phonemandatory ? 'Phone *' : 'Phone'}
          type="text"
          placeholder=""
          onChange={onChangePhone}
          value={phone}
          feedBackError={phoneFeedBackError}
          feedBackMessage={phoneFeedBackMessage}
        />
        <FormInput
          label="Password *"
          type="password"
          placeholder=""
          onChange={onChangePassword}
          value={password}
          feedBackError={passwordFeedBackError}
          feedBackMessage={passwordFeedBackMessage}
        />
        <FormInput
          label="City"
          type="text"
          name="city"
          placeholder=""
          onChange={onChangeCity}
          value={city}
          feedBackError={cityFeedBackError}
          feedBackMessage={cityFeedBackMessage}
        />
        {date}
        {dobFeedBackError && <FeedBackMessage type="error">{dobFeedBackMessage}</FeedBackMessage>}
        <Label
          mb={40}
          sx={{
            color: 'textPrimary',
            fontSize: '17px',
            lineHeight: '20px',
            textAlign: 'left'
          }}
        >
          Gender
        </Label>
        <Row my={20} mx={0} mt="5px" mb="5px">
          <Div col="3" ml="20px">
            <Label htmlFor="genderMale">
              <Div
                as="input"
                type="radio"
                value="male"
                checked={gender === 'male'}
                name="gender"
                id="genderMale"
                mr={10}
                onChange={onChangeGender}
              />
           Male</Label>
          </Div>
          <Div col="3">
            <Div
              as="input"
              type="radio"
              value="female"
              checked={gender === 'female'}
              name="gender"
              id="genderFemale"
              mr={10}
              onChange={onChangeGender}
            />
            <Label htmlFor="genderFemale">Female</Label>
          </Div>
          <Div col="3">
            <Div
              as="input"
              id="transgender"
              type="radio"
              value="transgender"
              checked={gender === 'transgender'}
              name="gender"
              mr={10}
              onChange={onChangeGender}
            />
            <Label htmlFor="transgender">Transgender</Label>
          </Div>
          {genderFeedBackError && <Label>{genderFeedBackMessage}</Label>}
        </Row>
        <Row ml="15px">
          <Div
            as="input"
            type="checkbox"
            id="readTnc"
            onChange={onChangePolicy}
          />
          <Label htmlFor="readTnc" />
          <Label htmlFor="readTnc" textAlign="center" fontSize={16} pl={9}>I have read and agree to </Label>
          <a href="/privacy-policy" target="_blank">
            <Label
              textAlign="center"
              fontSize={16}
              pl={4}
              pt={1}
              color="primary"
              ml="3px"
              sx={{ borderBottom: 'divider' }}
            >
                Hometown Policy.
            </Label>
          </a>
        </Row>
        <Row ml="0" mr="0" mt="1.25rem">
          <Div col="8" pt="6px">
            <Label color="textDark" mr="0.3126rem">
              Already have an account.?
            </Label>
            <Link to={loginUrl}>
              <Label color="primary">Sign in</Label>
            </Link>
          </Div>
          <Div col="4">
            <Button
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="42px"
              disabled={loading || !policyAccepted}
              fontSize="0.875rem"
            >
              {!loading ? 'SIGN UP' : 'Please wait...' }
            </Button>
          </Div>
        </Row>
      </form>
    );
  }
}

SignupForm.defaultProps = {
  name: '',
  email: '',
  phone: '',
  password: '',
  gender: '',
  city: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  nameFeedBackError: PropTypes.bool,
  nameFeedBackMessage: PropTypes.string,
  phoneFeedBackError: false,
  phoneFeedBackMessage: '',
  passwordFeedBackError: false,
  passwordFeedBackMessage: '',
  genderFeedBackError: false,
  genderFeedBackMessage: '',
  cityFeedBackError: false,
  cityFeedBackMessage: '',
  policyAccepted: false,
  onChangeName: () => {},
  onChangeEmail: () => {},
  onChangePhone: () => {},
  onChangePassword: () => {},
  date: () => {},
  onSubmitSignup: () => {},
  onChangeGender: () => { },
  onChangeCity: () => { },
  onChangePolicy: () => { },
  loading: false,
  loginUrl: '',
  phonemandatory: true,
  dobFeedBackMessage: '',
  dobFeedBackError: false,
};

SignupForm.propTypes = {
  onChangeName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitSignup: PropTypes.func,
  onChangeGender: PropTypes.func,
  onChangeCity: PropTypes.func,
  onChangePolicy: PropTypes.func,
  name: PropTypes.string,
  date: PropTypes.func,
  gender: PropTypes.string,
  city: PropTypes.string,
  policyAccepted: PropTypes.bool,
  genderFeedBackError: PropTypes.bool,
  genderFeedBackMessage: PropTypes.string,
  cityFeedBackError: PropTypes.bool,
  cityFeedBackMessage: PropTypes.string,
  nameFeedBackError: PropTypes.bool,
  nameFeedBackMessage: PropTypes.string,
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
  dobFeedBackMessage: PropTypes.string,
  dobFeedBackError: PropTypes.bool,
};
