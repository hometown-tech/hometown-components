import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Buttons';
import Div from 'components/Div';
import Row from 'components/Row';
// import { /* FeedBackMessage, */ Label } from 'components/Label';
import FormInput from './FormInput';

export default class CaseRequestForm extends Component {
  render() {
    const {
      handleChange,
      onSubmitForm,
      fullName,
      fullNameFeedBackError,
      fullNameFeedBackMessage,
      subject,
      subjectFeedBackError,
      subjectFeedBackMessage,
      phone,
      phoneFeedBackError,
      phoneFeedBackMessage,
      email,
      emailFeedBackError,
      emailFeedBackMessage,
      review,
      reviewFeedBackError,
      reviewFeedBackMessage,
      /* eslint-disable camelcase */
      /* eslint-enable camelcase */
      loading,
      loaded,
      col,
      reviewcolSize
    } = this.props;
    return (
      <form onSubmit={onSubmitForm}>
        <Row ml="0" mr="0">
          <Div col={col} pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Full Name*"
              type="text"
              placeholder=""
              name="fullName"
              onChange={handleChange}
              value={fullName}
              feedBackError={fullNameFeedBackError}
              feedBackMessage={fullNameFeedBackMessage}
            />
          </Div>
          <Div col={col} pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Mobile No*"
              type="text"
              maxlength="10"
              placeholder=""
              onChange={handleChange}
              name="phone"
              value={phone}
              feedBackError={phoneFeedBackError}
              feedBackMessage={phoneFeedBackMessage}
            />
          </Div>
          <Div col={col} pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Email*"
              type="text"
              placeholder=""
              onChange={handleChange}
              name="email"
              value={email}
              feedBackError={emailFeedBackError}
              feedBackMessage={emailFeedBackMessage}
            />
          </Div>
        </Row>
        <Row ml="0" mr="0">
          <Div col={col} pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Subject*"
              type="text"
              placeholder=""
              onChange={handleChange}
              name="subject"
              value={subject}
              feedBackError={subjectFeedBackError}
              feedBackMessage={subjectFeedBackMessage}
            />
          </Div>
          <Div col={reviewcolSize} pr="0.625rem" pl="0.625rem">
            <FormInput
              label="Review*"
              onChange={handleChange}
              name="review"
              value={review}
              rows={5}
              type="textarea"
              placeholder=""
              feedBackError={reviewFeedBackError}
              feedBackMessage={reviewFeedBackMessage}
            />
          </Div>
        </Row>
        <Row ml="0" mr="0" pb="1rem">
          <Div col={col} pr="0.625rem" pl="0.625rem" mt="1rem">
            <Button
              size="block"
              btnType="primary"
              fontFamily="regular"
              height="42px"
              mt="0.625rem"
              rows={5}
              onClick={onSubmitForm}
              disable={loading || loaded}
            >
              {loading ? 'Please Wait ...' : 'SUBMIT'}
            </Button>
          </Div>
        </Row>
        { /* eslint-disable */}
      </form>
    );
  }
}

CaseRequestForm.defaultProps = {
  email: '',
  password: '',
  emailFeedBackError: false,
  emailFeedBackMessage: '',
  loginResponse: {},
  onChangeEmail: () => {},
  col: '4',
  reviewcolSize: '8',
};

CaseRequestForm.propTypes = {
  handleChange: PropTypes.func,
  onChangeSubject: PropTypes.func,
  onChangePhone: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  emailFeedBackError: PropTypes.bool,
  emailFeedBackMessage: PropTypes.string,
  fullName: PropTypes.string,
  fullNameFeedBackError: PropTypes.bool,
  fullNameFeedBackMessage: PropTypes.string,
  subject: PropTypes.string,
  subjectFeedBackError: PropTypes.bool,
  subjectFeedBackMessage: PropTypes.string,
  phone: PropTypes.string,
  phoneFeedBackError: PropTypes.bool,
  phoneFeedBackMessage: PropTypes.string,
  review: PropTypes.string,
  reviewFeedBackError:PropTypes.bool,
  reviewFeedBackMessage:PropTypes.string,
  loading:PropTypes.bool,
  loaded: PropTypes.bool,
  col: PropTypes.string,
  reviewcolSize: PropTypes.string,
};
