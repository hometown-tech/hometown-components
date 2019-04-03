import { css } from 'styled-components';

const GetAlignItemsProps = props => css`
  ${props.alignItems && { alignItems: typeof props.alignItems === 'string' ? props.alignItems : props.alignItems.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.alignItems && { alignItems: typeof props.alignItems === 'string' ? props.alignItems : props.alignItems.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.alignItems && { alignItems: typeof props.alignItems === 'string' ? props.alignItems : props.alignItems.md }}
  }

`;

export default GetAlignItemsProps;
