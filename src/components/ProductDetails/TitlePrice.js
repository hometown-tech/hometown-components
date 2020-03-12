import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Heading from 'components/Heading';
import HeadingH5 from 'components/HeadingH5';
import Row from 'components/Row';
import Span from 'components/Span';
import Section from 'components/Section';
import Div from 'components/Div';
import ReactStars from 'react-stars';
import styled from 'styled-components';

const ReviewWrapper = styled(Div)`
  right: -11%;
  top: 18px;
  width: 45%;
  position: absolute;
`;

const TitlePrice = ({
  name,
  price,
  discPrice,
  savingsRs,
  savingsPercentage,
  count,
  ratings,
  onClickReviews,
  offerDetails
}) => (
  <Section mb="0.3125rem" p="0">
    <Container type="container" pr="1rem" pl="1rem">
      <Row display="block" mr="0" ml="0">
        <Heading
          itemProp="name"
          fontSize="1.125em"
          color="textDark"
          mb="0"
          mt="0"
          lh="1.5"
          fontFamily="light"
          ellipsis={false}
          pb="5px"
        >
          {name}
        </Heading>
        <Row display="block" mr="0" ml="0">
          <Div col="9">
            <HeadingH5
              itemProp="offers"
              itemScope
              itemType="http://schema.org/Offer"
              fontSize="1.6rem"
              color="primary"
              mb="0px"
              pb="5px"
              mt="0px"
              fontFamily="medium"
              ellipsis={false}
              display="flex"
            >
              <Span
                va="text-top"
                itemProp="priceCurrency"
                content="INR"
                color="#f98d29"
                fontSize="1rem"
                pr="10px"
                pt="8px"
              >Price : </Span>
              <Span
                va="text-top"
                itemProp="priceCurrency"
                content="INR"
                color="#f98d29"
                fontSize="1.6rem"
              >₹ </Span>
              <Span
                itemProp="price"
                va="text-top"
                content={discPrice.split(',').join('')}
                color="#f98d29"
                fontSize="1.6rem"
              > {discPrice}</Span>
            </HeadingH5>
            <HeadingH5
              fontSize="1.6rem"
              color="primary"
              mb="0px"
              pb="2px"
              mt="0px"
              fontFamily="medium"
              ellipsis={false}
            >
              {price !== discPrice &&
              <Fragment>
                <Span
                  fontSize="0.875rem"
                  color="rgba(0, 0, 0, 0.4)"
                  fontFamily="regular"
                  va="text-top"
                  lh="2.2"
                >M.R.P : </Span>
                <Span
                  fontSize="0.875rem"
                  color="rgba(0, 0, 0, 0.4)"
                  fontFamily="regular"
                  type="lt"
                  va="text-top"
                  lh="2.2"
                >₹ {price}</Span>
                <Span
                  fontSize="0.75rem"
                  color="rgba(0, 0, 0, 0.4)"
                  ml="10px"
                  fontFamily="regular"
                  va="text-top"
                  lh="2.4"
                >(incl. of all taxes)
                </Span>
              </Fragment>
              }
            </HeadingH5>
            <HeadingH5
              itemScope
              itemType=""
              fontSize="1rem"
              color="textDark"
              mb="0px"
              pb="2px"
              mt="0px"
              fontFamily="medium"
            >
              { price !== discPrice &&
              <Span
                fontSize="0.8125em"
                color="rgba(0, 0, 0, 0.4)"
                ml="0"
                fontFamily="regular"
                va="text-top"
              >Saving ₹ {savingsRs}
                {' '}({savingsPercentage}% OFF)
              </Span>
              }
            </HeadingH5>
            {
              !!offerDetails.offerPrice &&
              !!offerDetails.couponCode &&
              <Div>
                <HeadingH5
                  itemProp="offers"
                  itemScope
                  itemType="http://schema.org/Offer"
                  fontSize="1.6rem"
                  color="primary"
                  mb="0px"
                  pb="5px"
                  mt="10px"
                  pt="10px"
                  fontFamily="medium"
                  ellipsis={false}
                  display="flex"
                  style={{ borderTop: '1px solid #e9e9e9' }}
                >
                  <Span
                    va="text-top"
                    itemProp="priceCurrency"
                    content="INR"
                    color="#f98d29"
                    fontSize="1rem"
                    pr="10px"
                    pt="8px"
                  >Offer Price : </Span>
                  <Span
                    va="text-top"
                    itemProp="priceCurrency"
                    content="INR"
                    color="#f98d29"
                    fontSize="1.6rem"
                  >₹ </Span>
                  <Span
                    itemProp="price"
                    va="text-top"
                    content={discPrice.split(',').join('')}
                    color="#f98d29"
                    fontSize="1.6rem"
                  > {offerDetails.offerPrice}</Span>
                </HeadingH5>
                <Div>
                  <Span
                    fontSize="0.8125em"
                    color="rgba(0, 0, 0, 0.4)"
                    ml="0"
                    fontFamily="regular"
                    va="text-top"
                  >After Using Coupon
                  </Span>
                  <Span
                    fontSize="0.8125em"
                    color="#f98d29"
                    ml="0"
                    fontFamily="regular"
                    va="text-top"
                    tt="uppercase"
                  >{' '}{offerDetails.couponCode}
                  </Span>
                </Div>
              </Div>
            }
          </Div>
          <ReviewWrapper col="3" ta="right">
            {ratings !== 0 &&
            <Row display="block" mr="0" ml="0">
              <Div onClick={onClickReviews}>
                <ReactStars
                  count={5}
                  className="ratings"
                  size={18}
                  value={Number(ratings)}
                  half
                  edit={false}
                  color2="rgb(255, 215, 0)"
                />
                <Span
                  className="ratingsCount"
                  fontSize="0.875rem"
                  color="#29d"
                  va="super"
                >({count} Review{Number(count) === 1 ? '' : 's'})</Span>
                <div className="hide" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                Rated
                  <span itemProp="ratingValue">{ratings}</span>/5 based on
                  <span itemProp="reviewCount">{count}</span>
                customer reviews
                </div>
              </Div>
            </Row>
            }
          </ReviewWrapper>
        </Row>
      </Row>
    </Container>
  </Section>
);

TitlePrice.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  discPrice: PropTypes.string,
  savingsPercentage: PropTypes.string,
  savingsRs: PropTypes.string,
  ratings: PropTypes.number,
  count: PropTypes.number,
  onClickReviews: PropTypes.func,
  offerDetails: PropTypes.objectOf(PropTypes.any)
};

TitlePrice.defaultProps = {
  name: '',
  price: '',
  discPrice: '',
  savingsPercentage: '',
  savingsRs: '',
  count: 0,
  ratings: 0,
  onClickReviews: () => { },
  offerDetails: {}
};

export default TitlePrice;
