import { css } from 'styled-components';

const GetJustifyContentProps = props => css`
  ${props.justifyContent && {
    justifyContent: typeof props.justifyContent === 'string' ? props.justifyContent : props.justifyContent.lg
  }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.justifyContent && {
    justifyContent: typeof props.justifyContent === 'string' ? props.justifyContent : props.justifyContent.sm
  }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.justifyContent && {
    justifyContent: typeof props.justifyContent === 'string' ? props.justifyContent : props.justifyContent.md
  }}
  }
`;

export default GetJustifyContentProps;
