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

const TitlePrice = ({
  name,
  price,
  discPrice,
  savingsRs,
  savingsPercentage,
  count,
  ratings,
  onClickReviews,
  offerDetails,
  savingTotal
}) => {
  const isOfferExist = !!offerDetails.offerPrice && !!offerDetails.couponCode;
  const {
    offerPrice = '',
    couponCode = '',
    couponPercentageValue = '',
    offerAmount = ''
  } = offerDetails;
  return (
    <Section mb="0.3125rem" p="0">
      <Container type="container" pr="1rem" pl="1rem">
        <Row display="block" mr="0" ml="0">
          <Heading
            itemProp="name"
            fontSize="14px"
            color="textDark"
            mb="0"
            mt="5px"
            lh="1.7"
            fontFamily="light"
            ellipsis={false}
            pb="5px"
          >
            {name}
          </Heading>
          <HeadingH5
            itemProp="offers"
            itemScope
            itemType="http://schema.org/Offer"
            ellipsis={false}
            display="flex"
            mt="0"
            mb="0"
          >
            <Div style={{ width: 75 }}>
              <Span
                itemProp="priceCurrency"
                content="INR"
                color={!isOfferExist ? '#f98d29' : ''}
                fontSize={!isOfferExist ? '20px' : '18px'}
              >Price : </Span>
            </Div>
            <Div style={{ width: 'calc(100% - 75px)' }}>
              <Span
                itemProp="price"
                content={discPrice.split(',').join('')}
                color={!isOfferExist ? '#f98d29' : ''}
                fontSize={!isOfferExist ? '20px' : '18px'}
              >₹ {discPrice}</Span>
            </Div>
          </HeadingH5>
          <Row display="block" mr="0" ml="0" style={{ width: '108%' }}>
            <Div col="12">
              <Row ml="0" mr="0">
                {price !== discPrice &&
                  <Fragment>
                    <Div style={{ width: 75 }}>
                      <Span
                        fontSize="1rem"
                        color="rgba(0, 0, 0, 0.4)"
                        fontFamily="regular"
                      >M.R.P :</Span>
                    </Div>
                    <Div style={{ width: 'calc(100% - 75px)' }}>
                      <Span
                        fontSize="1rem"
                        color="rgba(0, 0, 0, 0.4)"
                        fontFamily="regular"
                        type="lt"
                      >₹ {price}</Span>
                      <Span
                        fontSize="0.75rem"
                        color="rgba(0, 0, 0, 0.4)"
                        ml="10px"
                        fontFamily="regular"
                        lh="2.4"
                      >(incl. of all taxes)
                      </Span>
                    </Div>
                  </Fragment>
                }
                {!isOfferExist &&
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
                  >{`Saving ₹ ${savingsRs}
                    (${savingsPercentage}% OFF)`}
                  </Span>
                  }
                </HeadingH5>
                }
              </Row>
              {!!isOfferExist && price !== discPrice &&
              <Div>
                <Div>
                  <HeadingH5
                    itemProp="offers"
                    itemScope
                    itemType="http://schema.org/Offer"
                    ellipsis={false}
                    display="flex"
                    pt="5px"
                    pb="5px"
                    mt="0"
                    mb="0"
                    style={{
                      borderBottom: 'dashed 1px #d2d2d2',
                    }}
                  >
                    <Div style={{ width: 105 }}>
                      <Span
                        itemProp="priceCurrency"
                        content="INR"
                        color="#f98d29"
                        fontSize="20px"
                      >Offer Price</Span>
                    </Div>
                    <Div style={{ width: 'calc(100% - 105px)' }}>
                      <Div>
                        <Span
                          itemProp="price"
                          content={discPrice.split(',').join('')}
                          color="#f98d29"
                          fontSize="20px"
                        >
                          ₹ {offerPrice}
                        </Span>
                      </Div>
                      <Div>
                        <Span
                          fontSize="12px"
                          color="rgba(0, 0, 0, 0.4)"
                          fontFamily="regular"
                        >({`Extra ${couponPercentageValue}% OFF, Use Coupon `}
                          <Span
                            fontSize="12px"
                            color="#f98d29"
                            fontFamily="regular"
                            tt="uppercase"
                          >
                            {` ${couponCode}`}
                          </Span>)
                        </Span>
                      </Div>
                    </Div>
                  </HeadingH5>
                </Div>
                <Div style={{ borderBottom: 'dashed 1px #d2d2d2' }}>
                  <HeadingH5
                    itemScope
                    itemType=""
                    mb="0px"
                    mt="0px"
                    display="flex"
                  >
                    <Fragment>
                      <Div style={{ width: 105 }}>
                        <Span fontSize="14px" color="rgba(0, 0, 0, 0.4)" fontFamily="medium">Total Savings</Span>
                      </Div>
                      <Div style={{ width: 'calc(100% - 105px)' }}>
                        <Span
                          fontSize="14px"
                          color="rgba(0, 0, 0, 0.4)"
                          fontFamily="medium"
                        >₹{`${(savingsRs)} (${savingsPercentage}% OFF)`}
                        </Span>
                        {isOfferExist &&
                        <Div style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '5px 0',
                          lineHeight: 1.5
                        }}
                        >
                          <Span
                            fontSize="11px"
                            color="rgba(0, 0, 0, 0.4)"
                            fontFamily="regular"
                          >₹ {savingTotal}<br /> (Retail Discount)
                          </Span>
                          <Span
                            fontSize="12px"
                            color="rgba(0, 0, 0, 0.4)"
                            fontFamily="regular"
                            pl="10px"
                            pr="10px"
                          >{' '}+{' '}
                          </Span>
                          <Span
                            fontSize="11px"
                            color="rgba(0, 0, 0, 0.4)"
                            fontFamily="regular"
                          >₹ {offerAmount}<br /> (Limited Time Coupon)
                          </Span>
                        </Div>}
                      </Div>
                    </Fragment>
                  </HeadingH5>
                </Div>
              </Div>
              }
              {!!isOfferExist && !(price !== discPrice) &&
                <Div>
                  {/* this will be displayed when no discPrice but offerPrice */}
                  <Div>
                    <Span
                      itemProp="priceCurrency"
                      content="INR"
                      color="#f98d29"
                      fontSize="20px"
                    >Offer Price :</Span>
                    <Span
                      itemProp="price"
                      content={discPrice.split(',').join('')}
                      color="#f98d29"
                      fontSize="20px"
                    >
                      ₹ {offerPrice}
                    </Span>
                  </Div>
                  <Div>
                    <Span fontSize="14px" color="rgba(0, 0, 0, 0.4)" fontFamily="medium">Total Savings :</Span>
                    <Span
                      fontSize="12px"
                      color="rgba(0, 0, 0, 0.4)"
                      fontFamily="regular"
                    >₹ {`${offerAmount} (${couponPercentageValue}% OFF)`}
                    </Span>
                  </Div>
                </Div>
              }
            </Div>
            <Div col="12" ta="right" mt="2px">
              {ratings !== 0 &&
                <Row display="block" mr="-44px" ml="0" >
                  <Div col="12" onClick={onClickReviews}>
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
                      float="left"
                      mt="4px"
                    >({count} Review{Number(count) === 1 ? '' : 's'})</Span>
                    <div
                      className="hide"
                      itemProp="aggregateRating"
                      itemScope
                      itemType="http://schema.org/AggregateRating"
                    >
                      Rated
                      <span itemProp="ratingValue">{ratings}</span>/5 based on
                      <span itemProp="reviewCount">{count}</span>
                    customer reviews
                    </div>
                  </Div>
                </Row>
              }
            </Div>
          </Row>
        </Row>
      </Container>
    </Section>
  );
};

TitlePrice.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  discPrice: PropTypes.string,
  savingsPercentage: PropTypes.string,
  savingsRs: PropTypes.string,
  savingTotal: PropTypes.number,
  ratings: PropTypes.number,
  count: PropTypes.number,
  onClickReviews: PropTypes.func,
  offerDetails: PropTypes.objectOf(PropTypes.any)
};

TitlePrice.defaultProps = {
  savingTotal: 0,
  name: '',
  price: '',
  discPrice: '',
  savingsPercentage: '',
  savingsRs: '',
  count: 0,
  ratings: 0,
  onClickReviews: () => {},
  offerDetails: {}
};

export default TitlePrice;
