import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${props => props.pr};
  padding-left: ${props => props.pl};
  ${props => props.display && { display: props.display }}
  ${props => props.mt && { marginTop: props.mt }}
  ${props => props.mb && { marginBottom: props.mb }}

  > *, ::after, ::before {
    box-sizing: border-box;
  }

  @media (min-width: 600px) {
    max-width: ${props => props.type === 'cf' ? '100%' : '540px'};
  }
  @media (min-width: 768px) {
    max-width: ${props => props.type === 'cf' ? '100%' : '720px'};
  }
  @media (min-width: 992px) {
    max-width: ${props => props.type === 'cf' ? '100%' : '960px'};
  }
  @media (min-width: 1200px) {
    max-width: ${props => props.type === 'cf' ? '100%' : '1170px'};
  }
`;

Container.defaultProps = {
  type: 'container',
  pr: '1.25rem',
  pl: '1.25rem'
};

export default Container;
