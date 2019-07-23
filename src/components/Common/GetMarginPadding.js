import { css } from 'styled-components';

const GetMarginPadding = css`
  ${props => props.m && { margin: props.m }}
  ${props => props.mt && { marginTop: props.mt }}
  ${props => props.mr && { marginRight: props.mr }}
  ${props => props.mb && { marginBottom: props.mb }}
  ${props => props.ml && { marginLeft: props.ml }}

  ${props => props.p && { padding: props.p }}
  ${props => props.pt && { paddingTop: props.pt }}
  ${props => props.pr && { paddingRight: props.pr }}
  ${props => props.pb && { paddingBottom: props.pb }}
  ${props => props.pl && { paddingLeft: props.pl }}

  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('sm')}) 
  and (max-width: ${props => props.theme.breakpoints('md')}) {
    ${props => props.m && { margin: props.m.sm }}
    ${props => props.mt && { marginTop: props.mt.sm }}
    ${props => props.mr && { marginRight: props.mr.sm }}
    ${props => props.mb && { marginBottom: props.mb.sm }}
    ${props => props.ml && { marginLeft: props.ml.sm }}

    ${props => props.p && { padding: props.p.sm }}
    ${props => props.pt && { paddingTop: props.pt.sm }}
    ${props => props.pr && { paddingRight: props.pr.sm }}
    ${props => props.pb && { paddingBottom: props.pb.sm }}
    ${props => props.pl && { paddingLeft: props.pl.sm }}
  }
  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('md')}) 
  and (max-width: ${props => props.theme.breakpoints('lg')}) {
    ${props => props.m && { margin: props.m.md }}
    ${props => props.mt && { marginTop: props.mt.md }}
    ${props => props.mr && { marginRight: props.mr.md }}
    ${props => props.mb && { marginBottom: props.mb.md }}
    ${props => props.ml && { marginLeft: props.ml.md }}

    ${props => props.p && { padding: props.p.md }}
    ${props => props.pt && { paddingTop: props.pt.md }}
    ${props => props.pr && { paddingRight: props.pr.md }}
    ${props => props.pb && { paddingBottom: props.pb.md }}
    ${props => props.pl && { paddingLeft: props.pl.md }}
  }
  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('lg')}) {
    ${props => props.m && { margin: props.m.lg }}
    ${props => props.mt && { marginTop: props.mt.lg }}
    ${props => props.mr && { marginRight: props.mr.lg }}
    ${props => props.mb && { marginBottom: props.mb.lg }}
    ${props => props.ml && { marginLeft: props.ml.lg }}

    ${props => props.p && { padding: props.p.lg }}
    ${props => props.pt && { paddingTop: props.pt.lg }}
    ${props => props.pr && { paddingRight: props.pr.lg }}
    ${props => props.pb && { paddingBottom: props.pb.lg }}
    ${props => props.pl && { paddingLeft: props.pl.lg }}
  }
`;

export default GetMarginPadding;
