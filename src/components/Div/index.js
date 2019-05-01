import styled from 'styled-components';
import GetMarginPadding from '../Common/GetMarginPadding';
import GetJustifyContentProps from '../Common/GetJustifyContentProps';
import GetAlignSelfProps from '../Common/GetAlignSelfProps';
import GetAlignItemsProps from '../Common/GetAlignItemsProps';
import GetHeightProps from '../Common/GetHeightProps';

const display = (props, type, col) => {
  const typeObj = {
    block: {
      width: `${props.theme.col[col]}`,
      float: 'left',
      position: 'relative',
    },
    flex: {
      maxWidth: `${props.theme.col[col]}`,
      flex: `0 0 ${props.theme.col[col]}`,
      width: '100%'
    },
    flexEqual: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%',
      width: '100%'
    },
    none: {
      display: 'none'
    }
  };

  return typeObj[type];
};

const Div = styled.div`
  position: relative;

  ${props => display(props, props.display, (typeof props.col === 'object' ? props.col.lg : props.col))};

  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('sm')}) 
  and (max-width: ${props => props.theme.breakpoints('md')}) {
    ${props => props.col &&
    display(props, props.display, (typeof props.col === 'object' ? props.col.sm : props.col))
}}
  @media only screen 
  and (min-width: ${props => props.theme.breakpoints('md')}) 
  and (max-width: ${props => props.theme.breakpoints('lg')}) {
    ${props => props.col &&
    display(props, props.display, (typeof props.col === 'object' ? props.col.md : props.col))
}}

  ${props => props.bg && { background: props.bg }}
  ${props => props.ta && { textAlign: props.ta }}

  ${GetMarginPadding}
  ${GetJustifyContentProps}
  ${GetAlignSelfProps}
  ${GetAlignItemsProps}
  ${GetHeightProps}

  display: ${props => props.hide ? 'none' : 'initial'};
  ${props => props.right && { right: props.right }}
  ${props => props.flexDisplay && { display: props.flexDisplay }}

  box-sizing: border-box;
  > *, ::after, ::before {
    box-sizing: border-box;
  }
`;

Div.defaultProps = {
  display: 'block',
  col: 12,
  hide: false,
  flexDisplay: 'initial'
};

export default Div;
