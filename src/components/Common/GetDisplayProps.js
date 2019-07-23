import { css } from 'styled-components';

const GetDisplayProps = props => css`
  ${props.display && { display: typeof props.display === 'string' ? props.display : props.display.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.display && { display: typeof props.display === 'string' ? props.display : props.display.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.display && { display: typeof props.display === 'string' ? props.display : props.display.md }}
  }
`;

export default GetDisplayProps;
