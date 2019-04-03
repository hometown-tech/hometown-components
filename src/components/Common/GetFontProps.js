import { css } from 'styled-components';

const GetFontProps = props => css`
  ${props.color && { color: props.theme.colors[typeof props.lh === 'string' ? props.color : props.color.lg] }}
  ${props.fontFamily && {
    fontFamily: typeof props.fontFamily === 'string' ? props.fontFamily : props.fontFamily.lg
  }}
  ${props.fontWeight && {
    fontWeight: typeof props.fontWeight === 'string' || 'number' ? props.fontWeight : props.fontWeight.lg
  }}
  ${props.fontSize && {
    fontSize: typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.lg
  }}
  ${props.lh && { lineHeight: typeof props.lh === 'string' ? props.lh : props.lh.lg }}
  ${props.va && { verticalAlign: typeof props.va === 'string' ? props.va : props.va.lg }}
  ${props.ta && { textAlign: typeof props.ta === 'string' ? props.ta : props.ta.lg }}
  ${props.td && { textDecoration: typeof props.td === 'string' ? props.td : props.td.lg }}
  ${props.ls && { letterSpacing: typeof props.ls === 'string' ? props.ls : props.ls.lg }}
  ${props.tt && { textTransform: typeof props.tt === 'string' ? props.tt : props.tt.lg }}

  @media only screen 
  and (min-width: ${props.theme.breakpoints('sm')}) 
  and (max-width: ${props.theme.breakpoints('md')}) {
    ${props.color && { color: props.theme.colors[typeof props.lh === 'string' ? props.color : props.color.sm] }}
    ${props.fontFamily && {
    fontFamily: typeof props.fontFamily === 'string' ? props.fontFamily : props.fontFamily.sm
  }}
    ${props.fontWeight && {
    fontWeight: typeof props.fontWeight === 'string' || 'number' ? props.fontWeight : props.fontWeight.sm
  }}
    ${props.fontSize && {
    fontSize: typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.sm
  }}
    ${props.lh && { lineHeight: typeof props.lh === 'string' ? props.lh : props.lh.sm }}
    ${props.va && { verticalAlign: typeof props.va === 'string' ? props.va : props.va.sm }}
    ${props.ta && { textAlign: typeof props.ta === 'string' ? props.ta : props.ta.sm }}
    ${props.td && { textDecoration: typeof props.td === 'string' ? props.td : props.td.sm }}
    ${props.ls && { letterSpacing: typeof props.ls === 'string' ? props.ls : props.ls.sm }}
    ${props.tt && { textTransform: typeof props.tt === 'string' ? props.tt : props.tt.sm }}
  }
  @media only screen 
  and (min-width: ${props.theme.breakpoints('md')}) 
  and (max-width: ${props.theme.breakpoints('lg')}) {
    ${props.color && { color: props.theme.colors[typeof props.lh === 'string' ? props.color : props.color.md] }}
    ${props.fontFamily && {
    fontFamily: typeof props.fontFamily === 'string' ? props.fontFamily : props.fontFamily.md
  }}
    ${props.fontWeight && {
    fontWeight: typeof props.fontWeight === 'string' || 'number' ? props.fontWeight : props.fontWeight.md
  }}
    ${props.fontSize && {
    fontSize: typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.md
  }}
    ${props.lh && { lineHeight: typeof props.lh === 'string' ? props.lh : props.lh.md }}
    ${props.va && { verticalAlign: typeof props.va === 'string' ? props.va : props.va.md }}
    ${props.ta && { textAlign: typeof props.ta === 'string' ? props.ta : props.ta.md }}
    ${props.td && { textDecoration: typeof props.td === 'string' ? props.td : props.td.md }}
    ${props.ls && { letterSpacing: typeof props.ls === 'string' ? props.ls : props.ls.md }}
    ${props.tt && { textTransform: typeof props.tt === 'string' ? props.tt : props.tt.md }}
  }
`;

export default GetFontProps;
