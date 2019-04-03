import { css } from 'styled-components';

const GetTextAlignProps = props => css`
  ${props.ta && { textAlign: typeof props.ta === 'string' ? props.ta : props.ta.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.ta && { textAlign: typeof props.ta === 'string' ? props.ta : props.ta.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.ta && { textAlign: typeof props.ta === 'string' ? props.ta : props.ta.md }}
  }
`;

export default GetTextAlignProps;
