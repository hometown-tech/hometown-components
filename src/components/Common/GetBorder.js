import { css } from 'styled-components';

const GetBorder = props => css`
  ${props.borderRadius && {
    borderRadius: typeof props.borderRadius === 'string' ? props.borderRadius : props.borderRadius.lg
  }}
  ${props.border && {
    border: typeof props.border === 'string' ? props.border : props.border.lg
  }}
  ${props.borderTop && { borderTop: typeof props.borderTop === 'string' ? props.borderTop : props.borderTop.lg }}
  ${props.borderBottom && {
    borderBottom: typeof props.borderBottom === 'string' ? props.borderBottom : props.borderBottom.lg
  }}
  ${props.borderLeft && { borderLeft: typeof props.borderLeft === 'string' ? props.borderLeft : props.borderLeft.lg }}
  ${props.borderRight && {
    borderRight: typeof props.borderRight === 'string' ? props.borderRight : props.borderRight.lg
  }}
  ${props.bc && { borderColor: typeof props.bc === 'string' ? props.bc : props.bc.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.borderRadius && {
    borderRadius: typeof props.borderRadius === 'string' ? props.borderRadius : props.borderRadius.sm
  }}
    ${props.border && {
    border: typeof props.border === 'string' ? props.border : props.border.sm
  }}
    ${props.borderTop && { borderTop: typeof props.borderTop === 'string' ? props.borderTop : props.borderTop.sm }}
    ${props.borderBottom && {
    borderBottom: typeof props.borderBottom === 'string' ? props.borderBottom : props.borderBottom.sm
  }}
    ${props.borderLeft && { borderLeft: typeof props.borderLeft === 'string' ? props.borderLeft : props.borderLeft.sm }}
    ${props.borderRight && {
    borderRight: typeof props.borderRight === 'string' ? props.borderRight : props.borderRight.sm
  }}
    ${props.bc && { borderColor: typeof props.bc === 'string' ? props.bc : props.bc.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.borderRadius && {
    borderRadius: typeof props.borderRadius === 'string' ? props.borderRadius : props.borderRadius.md
  }}
    ${props.border && {
    border: typeof props.border === 'string' ? props.border : props.border.md
  }}
    ${props.borderTop && { borderTop: typeof props.borderTop === 'string' ? props.borderTop : props.borderTop.md }}
    ${props.borderBottom && {
    borderBottom: typeof props.borderBottom === 'string' ? props.borderBottom : props.borderBottom.md
  }}
    ${props.borderLeft && { borderLeft: typeof props.borderLeft === 'string' ? props.borderLeft : props.borderLeft.md }}
    ${props.borderRight && {
    borderRight: typeof props.borderRight === 'string' ? props.borderRight : props.borderRight.md
  }}
    ${props.bc && { borderColor: typeof props.bc === 'string' ? props.bc : props.bc.md }}
  }
`;

export default GetBorder;
