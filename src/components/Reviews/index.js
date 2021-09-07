import React from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Row';
import Div from 'components/Div';
import HeadingH6 from 'components/HeadingH6';
import Container from 'components/Container';
import Section from 'components/Section';
import ReviewItem from 'components/Reviews/ReviewItem';
import ReactStars from 'react-stars';

const Reviews = ({
  reviewItems, col, pr, ratings
}) => {
  reviewItems = reviewItems.sort((a, b) =>
    (b.options[0] && Number(b.options[0].option_value)) - (a.options[0] && Number(a.options[0].option_value)));
  return (
    <Section
      mb="0.3125rem"
      p="0"
      pt="0"
      display="block"
      mt="1.5rem"
    >
      <Container type="container" pl="1rem" pr="1rem" ml="1rem" mr="1rem">
        <Row mb="1.5rem" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <HeadingH6
            mb="0px"
            mt="0"
            color="textLight"
            fontSize="1em"
            fontWeight="bold"
            style={{ display: 'inline-block', width: '40%', fontWeight: 'bold' }}
          >
            Overall Rating
          </HeadingH6>
          <Div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '40%'
          }}
          >
            <ReactStars
              count={5}
              size={20}
              value={ratings}
              half={false}
              color2="#ffd700"
              style={{ display: 'inline-block' }}
            />
            <HeadingH6
              style={{ display: 'inline-block' }}
              mt="5px"
              mb="0px"
              ml="0.5rem"
              color="#212121"
              fontSize="1rem"
            >
              {ratings}/5
            </HeadingH6>
          </Div>
        </Row>
        <Row display="block" m="0" mb="0">
          {reviewItems && reviewItems.map((review, index) => (
            <ReviewItem col={col} review={review} key={String(index)} pr={pr} />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

Reviews.defaultProps = {
  col: '12',
  pr: '0',
  ratings: 0
};

Reviews.propTypes = {
  reviewItems: PropTypes.array.isRequired,
  col: PropTypes.string,
  pr: PropTypes.string,
  ratings: PropTypes.number
};

export default Reviews;
