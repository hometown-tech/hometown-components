import { css } from 'styled-components';

const GetBorder = props => css`
  ${props.borderRadius && { borderRadius: props.borderRadius }}
  ${props.border && { border: props.border }}
  ${props.borderTop && { borderTop: props.borderTop }}
  ${props.borderBottom && { borderBottom: props.borderBottom }}
  ${props.borderLeft && { borderLeft: props.borderLeft }}
  ${props.borderRight && { borderRight: props.borderRight }}
  ${props.bc && { borderColor: props.bc }}
`;

export default GetBorder;
