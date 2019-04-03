import styled from 'styled-components';
import GetMarginPadding from '../Common/GetMarginPadding';
import GetFontProps from '../Common/GetFontProps';
import GetDisplayProps from '../Common/GetDisplayProps';

const Heading = styled.h4`
  ${props => props.ellipsis && {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }}

  ${GetFontProps}
  ${GetMarginPadding}
  ${GetDisplayProps}
`;

Heading.defaultProps = {
  fontSize: '1.5rem',
  fontFamily: 'regular',
  mt: '0.625em',
  mb: '0.625em',
  pb: '2px',
  lh: '1.2',
  color: 'primary',
  ellipsis: true
};

export default Heading;
