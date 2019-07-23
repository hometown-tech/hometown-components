import { css } from 'styled-components';

const GetAlignSelfProps = props => css`
  ${props.alignSelf && { alignSelf: typeof props.alignSelf === 'string' ? props.alignSelf : props.alignSelf.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.alignSelf && { alignSelf: typeof props.alignSelf === 'string' ? props.alignSelf : props.alignSelf.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.alignSelf && { alignSelf: typeof props.alignSelf === 'string' ? props.alignSelf : props.alignSelf.md }}
  }

`;

export default GetAlignSelfProps;
