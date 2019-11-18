import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* ====== Components ====== */
import BoxHtV1 from '../BoxHtV1';
import ImageHtV1 from '../ImageHtV1';

const GridItem = ({ to, ...rest }) => (
  <BoxHtV1 variant="maronryGridItem">
    <Link to={to}>
      <ImageHtV1 width={1} {...rest} />
    </Link>
  </BoxHtV1>
);

GridItem.defaultProps = {
};

GridItem.propTypes = {
  to: PropTypes.string.isRequired
};

export default GridItem;
