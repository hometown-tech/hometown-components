import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Section from 'components/Section';
import SpecList from 'components/ProductDetails/SpecList';

const Specs = ({ specs, prodDetail }) => (
  <Section mb="0px" p="0">
    <Container type="container" pr="0rem" pl="0rem">
      {specs.map((spec, index) => (
        <SpecList list={spec} prodDetail={prodDetail} key={String(index)} />
      ))}
    </Container>
  </Section>
);

Specs.propTypes = {
  specs: PropTypes.array.isRequired,
  prodDetail: PropTypes.bool.isRequired
};

export default Specs;
