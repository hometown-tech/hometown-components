import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'components/Row';
import Div from 'components/Div';
import Text from 'components/Text';
import Heading from 'components/Heading';
import Img from 'components/Img';
import ImageShimmerMobile from 'components/ImageShimmerMobile';
import { Label } from 'components/Label';
import Theme from 'components/Theme';

const ProductInline = ({
  name, image, specialPrice, unitPrice, qty, productURL, formatAmount, offerMessage
}) => (
  <Div mr="0" ml="0" mb="0.3125rem">
    <Row display="block" mr="0" ml="0">
      <Link
        onClick={e => {
          if (productURL === '') { e.preventDefault(); }
        }}
        to={productURL}
      >
        <Div col="4">
          <ImageShimmerMobile src={image} height="110px">
            {imageURL => <Img alt={name} src={imageURL} width="100%" />}
          </ImageShimmerMobile>
        </Div>
        <Div col="8" pl="0.9375rem">
          <Heading
            mb="0"
            mt="0"
            color={Theme.colors.text}
            fontFamily={Theme.fontFamily.medium}
            fontSize="0.75rem"
            lh="1.5"
            ellipsis={false}
          >{name}
          </Heading>
          <Div mb="0.25rem">
            <Div mt="0.3125rem">
              {unitPrice !== specialPrice && specialPrice !== 0 && (
                <Fragment>
                  <Label color="black" fontSize="0.875rem" mt="0">
                    <s>Rs.{formatAmount(Number(unitPrice) * Number(qty))}</s>
                  </Label>
                  <br />
                </Fragment>
              )}
              <Label color="primary" fontSize="1.25rem" mt="0" mb="0px">
                Rs.
                {specialPrice === 0
                  ? formatAmount(Number(unitPrice) * Number(qty))
                  : formatAmount(Number(specialPrice) * Number(qty))}
              </Label>
            </Div>
          </Div>
          {offerMessage ? (
            <Div>
              <Text
                mt="0px"
                mb="0px"
                color="orangered"
                fontSize="0.75rem"
                style={{
                  fontWeight: 'bold'
                }}
              >
                {offerMessage}
              </Text>
            </Div>
          ) : null}
        </Div>
      </Link>
    </Row>
  </Div>
);

ProductInline.defaultProps = {
  image: '',
  name: '',
  specialPrice: '',
  unitPrice: '',
  qty: 0,
  productURL: '',
  offerMessage: '',
  formatAmount: () => {},
};

ProductInline.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  specialPrice: PropTypes.string,
  unitPrice: PropTypes.string,
  qty: PropTypes.number,
  productURL: PropTypes.string,
  formatAmount: PropTypes.func,
  offerMessage: PropTypes.string
};

export default ProductInline;
