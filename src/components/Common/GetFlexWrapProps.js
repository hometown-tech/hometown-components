import { css } from 'styled-components';

const GetFlexWrapProps = props => css`
  ${props.flexWrap && { flexWrap: props.flexWrap }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.flexWrap && { flexWrap: props.flexWrap.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.flexWrap && { flexWrap: props.flexWrap.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.flexWrap && { flexWrap: props.flexWrap.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.flexWrap && { flexWrap: props.flexWrap.xs }}
  }
`;

export default GetFlexWrapProps;
