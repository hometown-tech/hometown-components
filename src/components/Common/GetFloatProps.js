import { css } from 'styled-components';

const GetFloatProps = props => css`
  ${props.float && { float: props.float }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.float && { float: props.float.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.float && { float: props.float.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.float && { float: props.float.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.float && { float: props.float.xs }}
  }
`;

export default GetFloatProps;
