import styled from 'styled-components';
import PropTypes from 'prop-types';

const Path = styled.path`
  fill: ${props => props.theme.colors[props.fill]};
`;

Path.propTypes = {
  fill: PropTypes.string
};

Path.defaultProps = {
  fill: 'primaryText'
};

export default Path;
