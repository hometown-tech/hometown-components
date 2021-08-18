import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Div from 'components/Div';
import { FeedBackMessage, Label } from 'components/Label';
import Row from 'components/Row';
import FormInput from './FormInput';


export default class ProfileForm extends Component {
  render() {
    const {
      email,
      phone,
      fullName,
      gst,
      gender,
      city,
      gstFeedBackError,
      gstFeedBackMessage,
      onChangeGST,
      onChangeEmail,
      onChangePhone,
      onChangeFullName,
      onChangeGender,
      onChangeCity,
      emailFeedBackError,
      emailFeedBackMessage,
      phoneFeedBackError,
      phoneFeedBackMessage,
      genderFeedBackError,
      genderFeedBackMessage,
      cityFeedBackError,
      cityFeedBackMessage,
      fullNameFeedBackError,
      fullNameFeedBackMessage,
      dobFeedBackError,
      dobFeedBackMessage,
      onSubmitProfile,
      date,
      response
    } = this.props;
    const {
      loading, loaded, error, errorMessage
    } = response;
    return (
      <form onSubmit={onSubmitProfile}>
        <FormInput
          label="Full Name"
          type="text"
          placeholder=""
          onChange={onChangeFullName}
          value={fullName}
          feedBackError={fullNameFeedBackError}
          feedBackMessage={fullNameFeedBackMessage}
        />
        <FormInput
          style={{ backgroundColor: '#cccccc38' }}
          label="Email ID"
          type="text"
          placeholder=""
          onChange={onChangeEmail}
          value={email}
          feedBackError={emailFeedBackError}
          feedBackMessage={emailFeedBackMessage}
          readOnly
        />
        {date}
        {dobFeedBackError && <FeedBackMessage type="error">{dobFeedBackMessage}</FeedBackMessage>}
        <FormInput
          style={{ backgroundColor: '#cccccc38' }}
          readOnly
          label="Phone"
          type="text"
          placeholder=""
          onChange={onChangePhone}
          value={phone}
          feedBackError={phoneFeedBackError}
          feedBackMessage={phoneFeedBackMessage}
        />
        <FormInput
          label="City"
          type="text"
          placeholder=""
          name="city"
          onChange={onChangeCity}
          value={city}
          feedBackError={cityFeedBackError}
          feedBackMessage={cityFeedBackMessage}
        />
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
        <Row mb="10px" mt="10px" ml="1px">
          <Div col="4">
            <input
              as="input"
              type="radio"
              value="male"
              checked={gender === 'male'}
              name="gender"
              onChange={onChangeGender}
              style={{ marginRight: '3px' }}
            />
            <Label>Male</Label>
          </Div>
          <Div col="4">
            <input
              as="input"
              type="radio"
              value="female"
              checked={gender === 'female'}
              name="gender"
              onChange={onChangeGender}
              style={{ marginRight: '3px' }}
            />
            <Label>Female</Label>
          </Div>
          <Div col="4">
            <input
              as="input"
              type="radio"
              value="transgender"
              checked={gender === 'transgender'}
              name="gender"
              onChange={onChangeGender}
              style={{ marginRight: '3px' }}
            />
            <Label>Transgender</Label>
          </Div>
          {genderFeedBackError && <Label>{genderFeedBackMessage}</Label>}
        </Row>
        <FormInput
          label="GST Number"
          type="text"
          placeholder=""
          onChange={onChangeGST}
          value={gst}
          feedBackError={gstFeedBackError}
          feedBackMessage={gstFeedBackMessage}
        />
        <Button
          size="block"
          btnType="primary"
          fontFamily="regular"
          height="42px"
          mt="1.5rem"
          disabled={loading || fullNameFeedBackError || emailFeedBackError ||
           phoneFeedBackError || gstFeedBackError}
        >
          {(response && !loading) ? 'UPDATE PROFILE' : 'Please wait...' }
        </Button>
        {(error && !loaded) &&
          <div>
            <FeedBackMessage
              type="error"
              ta="center"
              fontSize="0.875rem"
              mt="1rem"
              display="block"
            >
              {(errorMessage.email) && 'Invalid Email'}
              {(errorMessage.mobile) && 'Invalid Mobile Number'}
              {(errorMessage.full_name) && 'Password should be 8 characters'}
              {(errorMessage.error_message) && 'Something went wrong !'}
            </FeedBackMessage>
          </div>
        }
      </form>
    );
  }
}

ProfileForm.defaultProps = {
  email: '',
  phone: '',
  fullName: '',
  gst: '',
  gender: '',
  city: '',
  gstFeedBackError: false,
  gstFeedBackMessage: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  phoneFeedBackError: false,
  phoneFeedBackMessage: '',
  fullNameFeedBackError: false,
  fullNameFeedBackMessage: '',
  genderFeedBackError: false,
  genderFeedBackMessage: '',
  cityFeedBackError: false,
  cityFeedBackMessage: '',
  dobFeedBackMessage: '',
  dobFeedBackError: false,
  onChangeEmail: () => {},
  onChangeGST: () => {},
  onChangePhone: () => {},
  onChangeFullName: () => {},
  onSubmitProfile: () => {},
  onChangeGender: () => { },
  onChangeCity: () => { },
  date: () => {},
  response: {}
};

ProfileForm.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangeFullName: PropTypes.func,
  onSubmitProfile: PropTypes.func,
  onChangeGST: PropTypes.func,
  onChangeGender: PropTypes.func,
  onChangeCity: PropTypes.func,
  date: PropTypes.func,
  email: PropTypes.string,
  phone: PropTypes.string,
  gender: PropTypes.string,
  city: PropTypes.string,
  fullName: PropTypes.string,
  gst: PropTypes.string,
  gstFeedBackError: PropTypes.bool,
  gstFeedBackMessage: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  phoneFeedBackError: PropTypes.bool,
  genderFeedBackError: PropTypes.bool,
  genderFeedBackMessage: PropTypes.string,
  cityFeedBackError: PropTypes.bool,
  cityFeedBackMessage: PropTypes.string,
  phoneFeedBackMessage: PropTypes.string,
  fullNameFeedBackError: PropTypes.bool,
  fullNameFeedBackMessage: PropTypes.string,
  dobFeedBackError: PropTypes.bool,
  dobFeedBackMessage: PropTypes.string,
  response: PropTypes.object,
};
