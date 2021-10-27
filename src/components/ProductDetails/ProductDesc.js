import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Row from 'components/Row';
import Div from 'components/Div';
// import HeadingH6 from 'components/HeadingH6';
// import Text from 'components/Text';
import Section from 'components/Section';
import Spec from 'components/ProductDetails/Spec';
// import Button from 'components/Buttons';
// import Theme from 'components/Theme';

const formatDescription = desc => {
  desc.split('<br>').join('').split('&nbsp;').join('');
  return desc && desc.trim();
};

const SpecListWrapper = styled.div`
  position: relative;
  width: 100%;
  float: left;
  display: initial;
  box-sizing: border-box;
  padding: 1rem 1.25rem 0.375rem;
  margin-top: 1px;
  padding-bottom: 0px;
`;

const Description = styled.div`
margin-left: 1rem;
margin-right: 1rem;
font-size: 14px;
margin-top: 1.5rem;
line-height: 1.6;
ul {
  padding-left: 20px;
  li {
    font-size: 14px;
    margin-bottom: 5px;
    color: #323131;
    font-family: light;
    @media (max-width: ${props => props.theme.breakpoints('sm')}) {
      font-size: 12px;
    }
    b {
      font-family: light;
    }
  }
}
`;

/* eslint-disable react/no-danger */
const ProductDesc = ({ desc, details }) => {
  desc = formatDescription(desc);
  return (
    <Section mb="0px" pr="0" pl="0" pt="0" mr="-1rem" pb="1rem" ml="-1rem" style={{ backgroundColor: '#F9F9F9' }}>
      <Container type="container" pr="1rem" pl="1rem">
        <Row display="block" mb="0" mr="0" ml="0">
          <Div col="12">
            {/* <HeadingH6
              mt="0rem"
              color="textLight"
              fontSize="1em"
              fontFamily="light"
            >Description</HeadingH6> */}
            <Description
              itemProp="description"
              fontSize="0.875rem"
              dangerouslySetInnerHTML={{ __html: desc }}
            />

            <SpecListWrapper p="1rem" pb="0">
              {/* eslint-disable */}
              { details.map((eachSpec, specIndex) => {
                if (eachSpec.value) {
                  return (<Spec spec={eachSpec} key={String(specIndex)} />);
                }
              })}
            </SpecListWrapper>

          </Div>
          {/* {desc.length > 120 && <Button
            pl="0"
            pr="0"
            mb="0"
            size="block"
            ta="left"
            color={Theme.colors.primary}
            btnType="link"
            onClick={toggleShowMore}
            fontSize="0.875rem"
          >{showmore ? 'Show More...' : 'Show Less'}</Button>} */}
        </Row>
      </Container>
    </Section>
  );
};

ProductDesc.propTypes = {
  desc: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
  // showmore: PropTypes.bool.isRequired,
  // toggleShowMore: PropTypes.func.isRequired,
};

export default ProductDesc;
