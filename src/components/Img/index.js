import styled from 'styled-components';
import GetMarginPadding from '../Common/GetMarginPadding';
import GetHeightProps from '../Common/GetHeightProps';
import GetWidthProps from '../Common/GetWidthProps';

const Img = styled.img`
  max-width: 100%;

  display: ${props => props.display};
  float: ${props => props.float};

  ${props => props.ta && { textAlign: props.ta }}
  ${props => props.va && { verticalAlign: props.va }}

  ${GetMarginPadding}
  ${GetHeightProps}
  ${GetWidthProps}

  ${props => props.border && { border: props.border }}
  ${props => props.position && { position: props.position }}
  ${props => props.top && { top: props.top }}
`;

Img.defaultProps = {
  float: 'none',
  height: 'auto',
  display: 'block',
  width: 'inherit'
};

export default Img;
