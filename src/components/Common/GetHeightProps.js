import { css } from 'styled-components';

const GetHeightProps = props => css`
  ${props.height && { height: typeof props.height === 'string' ? props.height : props.height.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.height && { height: typeof props.col === 'string' ? props.height : props.height.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.height && { height: typeof props.col === 'string' ? props.height : props.height.md }}
  }
`;

export default GetHeightProps;
