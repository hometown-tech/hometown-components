import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import { Label } from 'components/Label';
import Img from 'components/Img';
import Section from 'components/Section';
import { Shimmer } from 'components/Shimmer';

import calendarImageGreen from '../../static/calendar-green.svg';
import calendarImageRed from '../../static/calendar-red.svg';
import truck from '../../static/truck.svg';

const ServiceDetails = ({
  children, deliverBy, shipping, pincode,
  loading
}) => (
  <Section mb="0" pr="0" pl="0" pt="0" pb="0.625rem">
    <Row display="block" mb="0.9375rem" mr="0" ml="0">
      <Div col="12" pt="0.625rem">
        {children}
      </Div>
    </Row>
    <Row display="block" mb="0.625rem" mr="0" ml="0">
      <Div col="12">
        {!loading && (deliverBy.indexOf('Currently') === 0 || deliverBy.indexOf('Sorry') === 0) ?
          <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={calendarImageRed} /> :
          <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={calendarImageGreen} />
        }
        {pincode ? <Label
          fontSize="0.825em"
          color={(deliverBy.indexOf('Currently') === 0 || deliverBy.indexOf('Sorry') === 0) ? 'error' : 'success'}
          display="contents"
        >{loading ? <Shimmer height="24px" width="200px" /> : deliverBy}</Label> : <Label
          fontSize="0.825em"
          color="secondary"
          display="contents"
        >
          Enter pincode to check delivery date
        </Label>
        }
      </Div>
    </Row>
    <Row display="block" mb="0.625rem" mr="0" ml="0">
      <Div col="12">
        <Img width="initial" height="1.5em" mr="0.625rem" float="left" src={truck} />
        <Label
          fontSize="0.825em"
          color="secondary"
          display="contents"
        >{shipping && Number(shipping) > 499 ? 'Free Shipping' : 'Shipping Charge Rs.80 ' }</Label>
      </Div>
    </Row>
  </Section>
);

ServiceDetails.propTypes = {
  deliverBy: PropTypes.string.isRequired,
  shipping: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  pincode: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

ServiceDetails.defaultProps = {
  loading: false,
};

export default ServiceDetails;
