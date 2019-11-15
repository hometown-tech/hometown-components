import styled from 'styled-components';

const Section = styled.section`
  clear: both;
  display: ${props => props.display};
  box-shadow: ${props => props.boxShadow};
  height: ${props => props.height};
  position: relative;

  ${props => props.minHeight && { minHeight: props.minHeight }}
  ${props => props.of && { overflow: props.of }}
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
  ${props => props.top && { top: props.top }}
  ${props => props.overflow && { overflow: props.overflow }}

  box-sizing: border-box;
  > *, ::after, ::before {
    box-sizing: border-box;
  }
`;

Section.defaultProps = {
  display: 'block',
  mb: '1.5rem',
  p: '0.9375rem',
  boxShadow: 'none',
  height: 'auto'
};

export default Section;
