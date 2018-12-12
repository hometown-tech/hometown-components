import styled from 'styled-components';

const QuickViewBtn = styled.button`
  border-radius: 2px;
  box-shadow: 2px 2px 1px 0 rgba(214, 214, 214, 0.5);
  background-color: #ffffff;
  border: solid 1px #dadada;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 130px;
  left: calc(50% - 65px);
  height: 40px;
  top: calc(50% - 65px);
  font-size: 0.875rem;
  transition: 0.3s all ease;
  display: none;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    display: none !important;
  }
`;

export default QuickViewBtn;
