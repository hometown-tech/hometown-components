import { styled, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

/* eslint-disable */
injectGlobal`
  ${normalize()}
`;
/* eslint-enable */

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default Input;
