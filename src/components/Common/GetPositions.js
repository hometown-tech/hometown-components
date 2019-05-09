import { css } from 'styled-components';

const GetPositions = css`
  ${props => props.zIndex && { zIndex: props.zIndex }}
  ${props => props.top && { top: props.top }}
  ${props => props.bottom && { bottom: props.bottom }}
  ${props => props.left && { left: props.left }}
  ${props => props.right && { right: props.right }}

  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('sm')}) 
  and (max-width: ${props => props.theme.breakpoints('md')}) {
    ${props => props.zIndex && { zIndex: props.zIndex.sm }}
    ${props => props.top && { top: props.top.sm }}
    ${props => props.bottom && { bottom: props.bottom.sm }}
    ${props => props.left && { left: props.left.sm }}
    ${props => props.right && { right: props.right.sm }}
  }
  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('md')}) 
  and (max-width: ${props => props.theme.breakpoints('lg')}) {
    ${props => props.zIndex && { zIndex: props.zIndex.md }}
    ${props => props.top && { top: props.top.md }}
    ${props => props.bottom && { bottom: props.bottom.md }}
    ${props => props.left && { left: props.left.md }}
    ${props => props.right && { right: props.right.md }}
  }
  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('lg')}) {
    ${props => props.zIndex && { zIndex: props.zIndex.lg }}
    ${props => props.top && { top: props.top.lg }}
    ${props => props.bottom && { bottom: props.bottom.lg }}
    ${props => props.left && { left: props.left.lg }}
    ${props => props.right && { right: props.right.lg }}
  }
`;

export default GetPositions;
