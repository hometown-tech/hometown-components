import styled from 'styled-components';

const ProductWrapper = styled.div`
  width: ${props => props.theme.col[props.col]};
  float: left;
  position: relative;
  text-align: left;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  display: initial;
  box-sizing: border-box;
  &:hover {
    button {
      @media (min-width: ${props => props.theme.breakpoints('md')}) {
        &:last-child {
          display: block !important;
        }
      }
    }
  }
`;

export default ProductWrapper;
