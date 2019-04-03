import { css } from 'styled-components';

const GetWidthProps = props => css`
  ${props.width && { width: typeof props.width === 'string' ? props.width : props.width.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.width && { width: typeof props.width === 'string' ? props.width : props.width.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.width && { width: typeof props.width === 'string' ? props.width : props.width.md }}
  }
`;

export default GetWidthProps;
