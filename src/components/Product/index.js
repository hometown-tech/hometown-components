import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Div from 'components/Div';
import Span from 'components/Span';
import WishlistBtn from 'components/WishlistBtn';
import ImageShimmer from 'components/ImageShimmer';
import Img from 'components/Img';
import Theme from 'components/Theme';
import ProductWrapper from './ProductWrapper';
import QuickViewBtn from './QuickView';
import colorIcon from '../../static/color-swatch.jpg';
import truck from '../../static/truck.svg';

const ProductImg = styled.img`
  position: absolute;
  max-width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 100%;
`;

const ProductInner = styled(Div)`
  padding: 0.25rem 0 0.25rem;
  height: 75px;
  svg {
    vertical-align: middle;
  }
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    padding: 0.25rem 0.3125rem;
  }
  @media (max-width: 320px) {
    height: 65px;
  }
`;

const ImgWrapper = styled.div`
  background: #FFF;
  position: relative;
  box-sizing: border-box;
  position: relative;
`;

const Colors = styled.span`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: 12px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.75);
  font-family: medium;
  img {
    width: 54px;
    margin-right: 5px;
    vertical-align: baseline;
  }
`;

const Heading = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-family: light;
  line-height: 1.2;
  color: #515151;
  margin-top: 0.3125em;
  margin-bottom: 0;
  padding-bottom: 6px;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 11px;
    color: #656565;
  }
`;

const PriceSpan = styled(Span)`
  font-size: 0.875rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.8125rem;
  }
`;

const CutPriceSpan = styled(Span)`
  font-size: 0.75rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.65625rem;
  }
`;

const DeliveredBySpan = styled(Span)`
  font-size: 0.75rem;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 0.6875rem;
  }
  @media (max-width: 320px) {
    font-size: 9px;
  }
`;

const DeliveredByWrapper = styled(Div)`
  margin-bottom: 5px;
  margin-top: 5px;
  @media (max-width: 360px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const SavingOff = styled(Span)`
  position: absolute;
  left: 0;
  top: 0;
  background: #d80019;
  font-size: 9px;
`;

const ComboOfferRibbon = styled(Span)`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #f98d29;
  font-size: 10px;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    font-size: 8px;
    padding: 6px 4px;
  }
`;

const handleClick = (dispatcher, position = 0) => () => {
  dispatcher(position + 1);
};
const Product = props => {
  const {
    name, image, price, cutprice, saving, sku,
    onClick, isWishList, col, skuLoading, onOpenQuickViewModal, deliveredBy, colors, imgHeight,
    position, setProductPosition, productURL, simpleSku, pincode, moneyBackOffer
  } = props;
  return (
    <ProductWrapper col={col}>
      <WishlistBtn
        onClick={onClick(sku, simpleSku)}
        isWishList={isWishList}
        wishlistLoading={skuLoading}
      />

      <Link onClick={handleClick(setProductPosition, position)} to={productURL}>
        <ImgWrapper>
          <ImageShimmer src={image} height={imgHeight}>
            {imageURL => (<ProductImg
              alt={name}
              src={imageURL}
              width="100%"
            />)}
          </ImageShimmer>
          {colors &&
          <Colors>
            <img src={colorIcon} alt="" />
            {colors}
          </Colors>
          }
          {saving &&
            <SavingOff
              fontFamily="regular"
              color="#FFF"
              p="5px 4px"
            >
              {saving.replace('-', '')} OFF
            </SavingOff>
          }
          {moneyBackOffer !== '1' &&
          <ComboOfferRibbon
            fontFamily="regular"
            color="#FFF"
            p="5px 4px"
          >
            Money Back offer
          </ComboOfferRibbon>
          }
        </ImgWrapper>
        <ProductInner p="0.25rem 0.3125rem 0.25rem">
          <Heading>{name}</Heading>
          <Div mb="2px">
            <PriceSpan
              mr="5px"
              color={Theme.colors.text}
              fontFamily="medium"
            >{price}</PriceSpan>
            {price !== cutprice && <CutPriceSpan
              mr="0"
              fontFamily="regular"
              color={Theme.colors.prodText}
            ><s>{cutprice}</s></CutPriceSpan>}
          </Div>
          {deliveredBy && <DeliveredByWrapper>
            <DeliveredBySpan
              lh="0.1"
              fontFamily="regular"
              color={Theme.colors.prodText}
            >
              {deliveredBy.indexOf('Sorry') !== 0 && <Img
                width="initial"
                height="18px"
                mr="0.5rem"
                position="relative"
                top="4px"
                display="inline-block"
                float="none"
                src={truck}
              />}
              {pincode && deliveredBy.indexOf('Sorry') === 0 ? `Sorry, Undeliverable to ${pincode}` : deliveredBy}
            </DeliveredBySpan>
          </DeliveredByWrapper>}
        </ProductInner>
      </Link>
      <QuickViewBtn onClick={onOpenQuickViewModal}>QUICK VIEW</QuickViewBtn>
    </ProductWrapper>
  );
};
Product.defaultProps = {
  isWishList: false,
  col: 12,
  skuLoading: false,
  onOpenQuickViewModal: () => {},
  colors: '',
  imgHeight: '270px',
  pincode: null
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cutprice: PropTypes.string.isRequired,
  saving: PropTypes.string.isRequired,
  moneyBackOffer: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  isWishList: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onOpenQuickViewModal: PropTypes.func,
  col: PropTypes.string,
  skuLoading: PropTypes.bool,
  deliveredBy: PropTypes.string.isRequired,
  colors: PropTypes.string,
  imgHeight: PropTypes.string,
  position: PropTypes.string.isRequired,
  setProductPosition: PropTypes.func.isRequired,
  productURL: PropTypes.string.isRequired,
  simpleSku: PropTypes.string.isRequired,
  pincode: PropTypes.string
};

export default Product;
